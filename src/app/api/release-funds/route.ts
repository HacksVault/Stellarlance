import { NextRequest, NextResponse } from "next/server";
import { spawn } from "child_process";
import path from "path";

const PYTHON_SCRIPT_PATH = path.join(process.cwd(), "cdp-sdk", "examples", "python", "evm", "send_stellar_work_done.py");
const PRIVATE_KEY = process.env.STELLAR_PRIVATE_KEY;

export async function POST(req: NextRequest) {
  try {
    const { from, to, amount } = await req.json();
    if (!from || !to || !amount) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }
    if (!PRIVATE_KEY) {
      return NextResponse.json({ error: "Server misconfigured: missing private key." }, { status: 500 });
    }

    // Call the Python script with arguments for Stellar
    // We'll pass sender, recipient, amount, and private key as arguments
    const args = [from, to, amount.toString(), PRIVATE_KEY];
    
    return new Promise((resolve) => {
      const py = spawn("python", [PYTHON_SCRIPT_PATH, ...args], { env: process.env });
      let output = "";
      let error = "";
      py.stdout.on("data", (data) => {
        output += data.toString();
      });
      py.stderr.on("data", (data) => {
        error += data.toString();
      });
      py.on("close", (code) => {
        if (code !== 0) {
          // Return both error and output for debugging
          resolve(NextResponse.json({ error: error || output || "Python script failed.", output, stderr: error }, { status: 500 }));
        } else {
          // Try to extract tx hash and block explorer URL from output (Stellar hashes are hex, not 0x...)
          const hashMatch = output.match(/Hash: ([a-fA-F0-9]{64})/);
          const urlMatch = output.match(/Block Explorer URL: (https?:\/\/\S+)/);
          resolve(NextResponse.json({
            output,
            hash: hashMatch ? hashMatch[1] : null,
            explorer: urlMatch ? urlMatch[1] : null
          }));
        }
      });
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "Internal server error." }, { status: 500 });
  }
} 