module.exports = {
  HTML:function(title, list, body, controls){
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <meta charset="utf-8">
        <script>
        var Link={
          setColor:function(color){
            var alist=document.querySelectorAll('a');
            var i=0;
            while (i<alist.length){
              alist[i].style.color=color;
              i=i+1;
            }
          }
        }
        var Body={
          setColor:function(color){
            document.querySelector('body').style.color=color;
          },
          setBackgroundColor:function(color){
            document.querySelector('body').style.backgroundColor=color;
          }
        }
          function nightDayHandler(self){
            var target=document.querySelector('body');
              if(self.value==='night'){
              //target.style.backgroundColor='black';
              Body.setBackgroundColor('black');
              //target.style.color='white';
              Body.setColor('white');
              self.value='day';
              Link.setColor('pink')

            }else{
              Body.setBackgroundColor('white');
              Body.setColor('black');
              self.value='night';
              Link.setColor('green')
            }
          }

        </script>
        <style>
        body{
          margin: 0;
        }
        a{
          color: black;
          text-decoration: 0;
        }

        h1{
          font-size:50px;
          color: green;
          text-align: center;
          margin: 0;
          padding: 20px;
          border-bottom:1px solid gray
        }
        h1 a{
          color: green;
        }
        ul{
          margin: 0;
          width: 100px;
          padding: 20px;
        }
        ul a{
          color: green;
        }

        #grid{
          display: grid;
          grid-template-columns: 200px 1fr;
        }
        #grid ul{
          padding-left: 33px;
        }
        #grid #article{
          margin-top: none;
          padding-left: 20px;
        }
        #grid #controls a{
          color: green;
        }
        #images{
          text-align: center;
        }
        #images img{
          height: 200px;
        }

        @media(max-width:800px){
          #grid{
            display:block;
            margin-right: 20px;
          }
          ul{
            border-right:none;
          }
          h1{
            border-bottom:none;
          }
        }
        @media(min-width:800px){
          #image{
            margin-left: 0px;
          }
          img{
            height: 150px;
          }
        }
        </style>
      </head>
      <body>
        <h1>
          <a href="/">조립컴</a>
        </h1>
        <input id="night_day" type="button" value="night" onclick="nightDayHandler(this);">
        <div id="grid">
        ${list}<br>
        <div id="controls">
        ${controls}
        </div>
          <div id="article">
            ${body}
          </div>
        </div>
      </body>
    </html>
    `;
  },
  list:function(filelist){
    var list = '<ul>';
    var i = 0;
    while(i < filelist.length){
      list=list+`<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
      i = i + 1;
    }
    list = list + '</ul>';
    return list;
  }

}
