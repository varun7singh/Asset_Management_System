import React, { useState } from "react";
import CardStyles from "../style/Card.module.css";
import { postData } from "../utils/REST";

export default function AssetCard({ asset, onDelete, onRepair, onCount }) {
  const [value, setvalue] = useState(asset.count);
  let count = asset.count;

  const add = async (amt) => {
    try {
      const res = await postData(`/inc/${asset.asset_id}`, false, null, {
        asset_id: asset.asset_id,
        amount: amt,
      });
      console.log(res);
      onCount();
    } catch (error) {
      console.log(error);
    }
  };

  const remove = async (amt) => {
    try {
      const res = await postData(`/dec/${asset.asset_id}`, false, null, {
        count,
        amount: amt,
      });
      console.log(res);
      onCount();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className={CardStyles.card}>
      <div className={CardStyles.control}>
        <div className={CardStyles.title}>{asset.comp_name}</div>
      </div>
      <div className={CardStyles.data}>
        

        <p>Asset ID: {asset.asset_id}</p>
        <p>Model: {asset.model}</p>
        <p>Room: {asset.room_id}</p>
        <p>Cost: {asset.purchase_cost}</p>
        <p>Date: {asset.purchase_date.slice(0,10)}</p>
      </div>
      <div>
        Count: {count}
      </div>
    </div>
  );
}
