import { Avatar, Button, Grid, FormControl, FormHelperText, FormLabel, RadioGroup, FormControlLabel, Radio } from "@material-ui/core";
import { CloudUpload, Delete } from "@material-ui/icons";
import React, { createRef, useEffect, useState } from "react";
import MaleImg from "../../../assets/images/avatar/male.png";
import FemaleImg from "../../../assets/images/avatar/female.png";

const AvatarUpload = ({
  defaultSrc = null,
  defaultGender = "male",
  className = "",
  size = "medium",
  onChangeGender = () => {},
  onChange = () => {},
}) => {
  const [image, _setImage] = useState(defaultSrc);
  const [gender, setGender] = useState(defaultGender);
  const [defaultImg, setDefaultImg] = useState(MaleImg);
  const inputFileRef = createRef(null);

  useEffect(() => {
      setDefaultImg(gender === "male" ? MaleImg : FemaleImg);
      onChangeGender(gender);
  }, [gender])

  const cleanup = () => {
    URL.revokeObjectURL(image);
    inputFileRef.current.value = null;
  };

  const setImage = (newImage) => {
    if (image) {
      cleanup();
    }
    _setImage(newImage);
  };

  const handleOnChange = (event) => {
    const newImage = event.target?.files?.[0];
    onChange(newImage);
    
    if (newImage) {
      setImage(URL.createObjectURL(newImage));
    }
  };

  /**
   *
   * @param {React.MouseEvent<HTMLButtonElement, MouseEvent>} event
   */
  const handleClick = (event) => {
    if (image) {
      event.preventDefault();
      setImage(null);
    }
  };

  return <Grid className={className} container spacing={1} justify="center">
    <Grid item xs={6}>
        <Avatar
            alt="Avatar"
            src={image || defaultImg}
            style={{
                width: size === "small" ? 50 : 100,
                height: size === "small" ? 50 : 100
            }}
        />
        <input
            ref={inputFileRef}
            accept="image/*"
            hidden
            id="avatar-image-upload"
            type="file"
            onChange={handleOnChange}
        />
        <label htmlFor="avatar-image-upload">
            <Button
                className="my-2"
                variant={size === "small" ? "outlined" : "contained"}
                color="primary"
                component="span"
                onClick={handleClick}
            >
            {image ? <Delete /> : <CloudUpload />} &nbsp;
            {size !== "small" && (image ? "Delete" : "Upload")}
            </Button>
        </label>          
    </Grid>    
    <Grid item xs={6} className="d-flex justify-content-end">
        <FormControl component="fieldset">
          <FormLabel component="legend"></FormLabel>
          <RadioGroup aria-label="" name="gender" value={gender} onChange={e => setGender(e.target.value)}>
              <FormControlLabel value="male" label="Male" labelPlacement="end" control={<Radio  />} />            
              <FormControlLabel value="female" label="Female" labelPlacement="end" control={<Radio  />} />            
          </RadioGroup>
          <FormHelperText></FormHelperText>
        </FormControl>
    </Grid>
  </Grid>
};

export default AvatarUpload;