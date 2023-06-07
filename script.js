//javascript
const navi = document.getElementById('SiteNavi');
const list = navi.getElementsByTagName('li');
for (let i = 0; i < list.length; i++) { 
  const item = list[i];
  item.style.color = "red";
}
