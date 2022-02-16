import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x49cd3b9635e005678766d35822219be72061a73e",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Familia",
        description: "This NFT will give you access to FamilyDAO!",
        image: readFileSync("scripts/assets/family.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()