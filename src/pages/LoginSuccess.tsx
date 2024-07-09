import React from "react";
import { SportsBasketball } from "@mui/icons-material";
import {
  Avatar,
} from "@mui/material";

const LoginSuccess = () => {
  return (
    <>
      <div>
        <p>LoginSuccess
          <Avatar sx={{ m: 1, bgcolor: "primary.light" }}>
            <SportsBasketball />
          </Avatar>
        </p>
        <img src="https://scontent.ftpe7-4.fna.fbcdn.net/v/t1.18169-9/998025_10151520012340920_1273035109_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=f798df&_nc_ohc=_HN2ki-NJdwQ7kNvgFA9NKO&_nc_ht=scontent.ftpe7-4.fna&oh=00_AYATB7lOPZlc2v0mq6-2OMdFrSwCoL3zV_-IVmRF3kUUjg&oe=66B450BD" alt="Jersey" width="500" height="600"></img>
      </div>
    </>
  )
}

export default LoginSuccess