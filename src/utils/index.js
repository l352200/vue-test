/**
 * 日期时间格式化未字符串输出
 * @param {(Date | string)} date 
 * @param {string} format 
 */
 export function formatDate(date, format) {
  if (!date) {
      return "";
  }
  let value = new Date(date);
  if (value == 'Invalid Date') {
      return ""
  } else {
      let yyyy = value.getFullYear();
      let M = value.getMonth() + 1;
      let MM = value.getMonth() + 1 >= 10 ? value.getMonth() + 1 : "0" + (value.getMonth() + 1);
      let d = value.getDate();
      let dd = value.getDate() >= 10 ? value.getDate() : "0" + value.getDate();
      let H = value.getHours();
      let HH = value.getHours() >= 10 ? value.getHours() : "0" + value.getHours();
      let m = value.getMinutes();
      let mm = value.getMinutes() >= 10 ? value.getMinutes() : "0" + value.getMinutes();
      let s = value.getSeconds();
      let ss = value.getSeconds() >= 10 ? value.getSeconds() : "0" + value.getSeconds();
      if (format === "yyyy") {
          return yyyy;
      } else if (format === 'yyyy-MM') {
          return yyyy + '-' + MM;
      } else if (format === 'yyyy-MM-dd') {
          return yyyy + '-' + MM + '-' + dd;
      } else if (format === 'HH:mm:ss') {
          return HH + ":" + mm + ":" + ss;
      } else if (format === 'HH:mm') {
          return HH + ":" + mm;
      } else if (format === 'yyyy-MM-dd HH:mm') {
          return yyyy + '-' + MM + '-' + dd + " " + HH + ":" + mm;
      } else if (format === 'yyyy-MM-dd HH:mm:ss') {
          return yyyy + '-' + MM + '-' + dd + " " + HH + ":" + mm + ":" + ss;
      } else if (format) {
          format = format.replace("yyyy", yyyy);
          format = format.replace("MM", MM);
          format = format.replace("dd", dd);
          format = format.replace("hh", HH);
          format = format.replace("mm", mm);
          format = format.replace("ss", ss);
          return format;
      } else {
          return yyyy + '-' + MM + '-' + dd + " " + HH + ":" + mm;
      }
  }
}
