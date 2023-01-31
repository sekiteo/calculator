import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { Calculator } from "../target/types/calculator";

describe("calculator", () => {
  const kp = anchor.web3.Keypair.fromSecretKey(
    Uint8Array.from([68,7,82,4,27,246,201,168,165,226,184,43,189,56,215,110,235
      ,21,155,132,213,218,106,54,98,245,179,252,44,236,70,99,14,223,
      22,191,242,43,60,253,181,53,126,168,49,33,198,120,220,159,254,69,205,226,236,63,212,
      127,140,202,248,43,254,252])
  );
  
  
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.Calculator as Program<Calculator>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods
    .createAccount()
    .accounts({
      account: kp.publicKey
    })
   
  });
});
