import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { FetchData } from "../utils/REST";
import AssetCard from "./AssetCard";
import SideBar from "./SideBar";
import s from "../style/Rooms.module.css";


function RoomTable() {
  const { id } = useParams();
  const [room, setRoom] = React.useState([]);
  const fetchAssets = async () => {
    try {
      const res = await FetchData(`/rooms/${id}`);
      setRoom(res.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  console.log(room);
  useEffect(() => {
    fetchAssets();
  }, []);
  return (
    <div className={s.layout}>
      <SideBar />
      <div className={s.main}>
        {room.map((asset) => {
          return <AssetCard key={asset.asset_id} asset={asset} />;
        })}
      </div>
    </div>
  );
}

export default RoomTable;
