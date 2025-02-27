import type { OverrideBundleDefinition } from "@polkadot/types/types";

// structs need to be in order
/* eslint-disable sort-keys */

const definitions: OverrideBundleDefinition = {
  types: [
    {
      // on all versions
      minmax: [0, undefined],
      types: {
        "Address": "MultiAddress",
        "LookupSource": "MultiAddress",
        "DataRequest": {
          "para_id": "Option<ParaId>",
          "account_id": "Option<AccountId>",
          "requested_block_number": "BlockNumber",
          "processed_block_number": "Option<BlockNumber>",
          "requested_timestamp": "u128",
          "processed_timestamp": "Option<u128>",
          "payload": "Text",
          "feed_name": "Text",
          "url": "Text"
        }
      },
    },
  ],
};

export default { typesBundle: definitions };
