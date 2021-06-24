import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import MaleImg from "../../../assets/images/avatar/male.png";
import FemaleImg from "../../../assets/images/avatar/female.png";
import { useSelector } from "react-redux";

const UserAvatar = ({
    width = '',
    height = '',
}) => {
    const { user } = useSelector(state => state.auth);
    const { avatar, gender } = user; 
    const [defaultImg, setDefaultImg] = useState(MaleImg);
    
    useEffect(() => {
        setDefaultImg(gender === "male" ? MaleImg : FemaleImg);
    }, [gender])

    return <Avatar
        alt="Avatar"
        src={avatar || defaultImg}
        style={{
            width,
            height
        }}
    />
};

export default UserAvatar;