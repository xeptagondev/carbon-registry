export const mapBase64ToFields = (fileUrls: string[]) => {
  let fileObjs: any[] = [];

<<<<<<< HEAD
  console.log('---------fileUrls-----------', fileUrls);
=======
  //console.log('---------fileUrls-----------', fileUrls);
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f

  if (fileUrls !== undefined && fileUrls.length > 0 && fileUrls[0] !== undefined) {
    fileObjs = fileUrls.map((item: any, index) => {
      const nameParts = item.split('/');
      const name = nameParts[nameParts.length - 1];
      const tempObj = {
        uid: name,
        name: name,
        status: 'done',
        url: item,
      };
      return tempObj;
    });
  }

  return fileObjs;
};
