export const adaptDataToClient = (data: any) => {
  return {
    id: data.id,
    tag: data.tag,
    url: data.fixed_height_downsampled_url,
    width: data.fixed_height_downsampled_width,
    height: data.fixed_height_downsampled_height,
    title: data.title,
  };
};

export const getDataAdapted = (dataArray: any) =>
  dataArray.map((it) => adaptDataToClient(it));

export const adaptErrorToClient = (error: any) => {
  return {
    id: error.id,
    message: error.message,
    error: error.error,
  };
};

export const getErrorsAdapted = (errorsArray: any) =>
  errorsArray.map((it) => adaptErrorToClient(it));
