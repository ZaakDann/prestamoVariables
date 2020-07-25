async function ddd(index,name){
  var waitie = document.getElementById("cool");
  waitie.style.display = "block";
  const respuest = await fetch('https://script.google.com/macros/s/AKfycbzKVpKPXw_fPs4fTL3hmmJzxHlEHQlX6pSf0PD5N_iJAettjQEk/exec?which=' + index);
  const content = await respuest.text();

  var blobb = b64toBlob(content);
  
  var formData = new FormData();
  formData.append("source", blobb);

  var url = window.URL.createObjectURL(blobb);
  var a = document.createElement('a');
  a.href = url;
  a.download = name + ".xlsx";
  document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
  a.click();    
  a.remove();
  setTimeout(function(){ document.getElementById("cool").style.display = "none"; }, 2000);
  
}


function b64toBlob(dataURI) {
      var byteString = atob(dataURI);
      var ab = new ArrayBuffer(byteString.length);
      var ia = new Uint8Array(ab);
  
      for (var i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i);
      }
      return new Blob([ab], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  }
