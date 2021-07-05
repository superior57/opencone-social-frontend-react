export const getFileType = (strFileName) => {
    let arrFileName = String(strFileName).split(".");
    let extension = arrFileName[arrFileName.length - 1];
    if ( extension === "jpg" || extension === "png" || extension === "jpeg" ) {
        return "image"
    } 
    return "video"
}

export const isEmpty = value =>
  value === undefined ||
  value === null ||
  (typeof value === 'object' && Object.keys(value).length === 0) ||
  (typeof value === 'string' && value.trim().length === 0);
