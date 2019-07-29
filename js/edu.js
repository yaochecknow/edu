(function() {
  var turnbanner = setInterval(interrun, 5000);
  var Mybanner = document.getElementsByClassName("banner"); //获取图片
  var Mypoint = document.getElementsByClassName("point"); //获取点
  var pictwall = document.getElementsByClassName("O124_in_wall");
  var intergo = 0;
  var fullscreen = document.getElementById("fullscreen"); //浮层
  //获取元素当前属性-----------------------------
  function getstyle(obj, name) {
    if (window.getComputedStyle) {
      return getComputedStyle(obj, null)[name];
    } else {
      return obj.currentStyle[name];
    }
  }
  // 点击按钮事件----------------------------------
  function clickpoint() {
    for (var i = 0; i < Mypoint.length; i++) {
      (function(index) {
        Mypoint[index].addEventListener("click", function() {
          clearpoint();
          this.className = "point onpoint";
          clearbanner();
          Mybanner[index].className = "banner active";
          intergo = index;
        });
      })(i);
    }
  }
  // 图片切换函数
  function interrun() {
    if (intergo != Mybanner.length - 1) {
      intergo++;
    } else {
      intergo = 0;
    }
    bannerrun();
  }
  function stopBannerChange() {
    for (var i = 0; i < Mybanner.length; i++) {
      (function(index) {
        Mybanner[index].addEventListener("mouseover", function() {
          clearInterval(turnbanner);
          Mybanner[index].addEventListener("mouseout", function() {
            console.log("sss");
            turnbanner
          });
        });
      })(i);
    }
  }
  // 设置图片名字-----------------------------------
  function bannerrun() {
    clearbanner();
    Mybanner[intergo].className = "banner active";
    clearpoint();
    Mypoint[intergo].className = "point onpoint";
  }
  // 清除按钮点击-------------------------------------
  function clearpoint() {
    for (var i = 0; i < Mypoint.length; i++) {
      Mypoint[i].className = "point";
    }
  }

  //清除图片名字
  function clearbanner() {
    for (var i = 0; i < Mybanner.length; i++) {
      Mybanner[i].className = "banner";
    }
  }
  // 照片墙----------------------------------------
  function addleftsize() {
    var wallleft = parseInt(getstyle(pictwall[0], "left")); //获取照片墙样式
    if (wallleft <= -1620) {
      var newview = 0;
    } else {
      var newview = wallleft - 1;
    }
    pictwall[0].style.left = newview + "px";
  }
  // 关注按钮点击事件 登录弹窗-----------------------------
  var intencl = document.getElementsByClassName("O124_inten_button");
  var inten = document.getElementById("intenbu");
  var canso = document.getElementById("cansobu");
  var LogIn = document.getElementsByClassName("O124_log_in_area");
  var LogCha = document.getElementsByClassName("cha");
  inten.onclick = function() {
    LogIn[0].style.display = "block";
    fullscreen.style.display = "block";
    LogCha[0].onclick = function() {
      LogIn[0].style.display = "none";
      fullscreen.style.display = "none";
      return;
    };
    inten.innerHTML = "已关注";
    canso.style.display = "inline-block";
    inten.style.color = "black";
    inten.style.background = "url(./img/tick_off.png) no-repeat";
    inten.style.backgroundPosition = "8px";
    inten.style.width = "52px";
    inten.style.borderRadius = "0px;";
    intencl[0].style.border = "1px solid #efefef";
  };
  canso.onclick = function() {
    inten.innerHTML = "关注";
    canso.style.display = "none";
    inten.style.color = "#ffffff";
    inten.style.background = null;
    inten.style.backgroundPosition = null;
    inten.style.width = null;
    inten.style.borderRadius = null;
    intencl[0].style.border = null;
  };
  // 视频播放事件----------------------------
  var videoon = document.getElementsByClassName("O124_video_main");
  var video_area = document.getElementById("video_area");
  var chacha = document.getElementById("cha");
  chacha.onclick = function() {
    video_area.style.display = "none";
    fullscreen.style.display = "none";
  };
  videoon[0].onclick = function() {
    video_area.style.display = "block";
    fullscreen.style.display = "block";
  };
  // 不再提醒功能-------------------------------
  var date = new Date();
  var past = new Date(date.setDate(date.getDate() + 3));
  var gray = document.getElementsByClassName("O124_remaind");
  var remaindarea = document.getElementById("remaindarea");
  var norebu = document.getElementById("noremaind");
  var cookstr = "remaind=no; expires=" + past;
  norebu.onclick = function() {
    gray[0].style.backgroundColor = "#ffffff";
    remaindarea.style.display = "none";
    document.cookie = cookstr;
  };
  function nore() {
    var Mycookir = document.cookie;
    var remaindcookie = Mycookir.split("; ");
    if (remaindcookie[0] === "remaind=no") {
      gray[0].style.backgroundColor = "#ffffff";
      remaindarea.style.display = "none";
    }
  }
  // 产品切换事件-----------------------------------
  // 获取网站数据节点
  var courseimg = document.getElementsByClassName("O124_change_img");
  var coursestuNum = document.getElementsByClassName("O124_student_num");
  var courseprice = document.getElementsByClassName("O124_inpict_price");
  var coursetitle = document.getElementsByClassName("O124_detail_title");
  var coursefrom = document.getElementsByClassName("O124_detail_from");
  var coursekind = document.getElementsByClassName("O124_detail_kind");
  var coursedescrb = document.getElementsByClassName("O124_detail_descrb");
  // 创造页码节点函数S
  /**
   *
   * @param {number} number
   * @param {stirng} element
   * @param {object} fatherele
   * @param {object} brotherele
   */
  function createSeqEle(number, element, fatherele, brotherele) {
    for (var i = 1; i <= number; i++) {
      var li = document.createElement(element);
      var gztext = document.createTextNode(i);
      li.appendChild(gztext);
      pagefather.insertBefore(li, rightChange[0]);
    }
  }
  //-------
  var on_but = 0;
  var courseDesigns = getDesignData(1, 20); //获取设计数据,返回数据总长度和第一页数据的对象
  var courseProgramms = getProgramData(1, 20); //获取编程数据，返回数据总长度和第一页数据的对象
  var pagefather = document.getElementById("O124_pagefather");
  var leftChange = document.getElementsByClassName("O124_left_change");
  var rightChange = document.getElementsByClassName("O124_right_change");
  /**
   *
   * @param {object} courseinthis //获取的该页面的数据
   */
  function onepagecourse(courseinthis) {
    for (var i = 0; i < 20; i++) {
      courseimg[i * 2].src = courseinthis.list[i].image;
      courseimg[i * 2 + 1].src = courseinthis.list[i].image;
      coursestuNum[i].innerHTML = courseinthis.list[i].studentNum;
      courseprice[i].innerHTML = courseinthis.list[i].price;
      coursetitle[i].innerHTML = courseinthis.list[i].title;
      coursefrom[i].innerHTML = courseinthis.list[i].author;
      coursekind[i].innerHTML = courseinthis.list[i].type;
      coursedescrb[i].innerHTML = courseinthis.list[i].description;
    }
  }
  onepagecourse(courseDesigns);
  /**
   *
   * @param {number} pagenum
   */
  function deletpagepoint(pagenum) {
    for (var i = pagenum; i > 0; i--) {
      pagefather.removeChild(pagefather.childNodes[i]);
    }
  }
  // 创建页码
  createSeqEle(
    Math.ceil(courseDesigns.total / 20),
    "li",
    pagefather,
    rightChange
  );
  var pageindex = 1;
  var pages = pagefather.childNodes;
  pages[1].className = "active";

  //清除所有页码按钮样式
  function clearPageNum() {
    for (i = 1; i < pages.length - 1; i++) {
      pages[i].className = "";
    }
  }
  // 对页码点击事件
  /**
   *
   */
  function pointpage() {
    for (i = 1; i < pages.length - 1; i++) {
      (function(pageon) {
        pages[pageon].onclick = function() {
          if (pageindex === pageon) {
            return;
          }
          clearPageNum();
          pages[pageon].className = "active";
          pageindex = pageon;
          if ((on_but = 0)) {
            var coursechage = getDesignData(pageindex, 20);
            onepagecourse(coursechage);
          } else {
            coursechage = getProgramData(pageindex, 20);
            onepagecourse(coursechage);
          }
        };
      })(i);
    }
  }
  // 上一页下一页按钮事件
  leftChange[0].onclick = function() {
    if (pageindex === 1) {
      return;
    }
    pageindex = pageindex - 1;
    clearPageNum();
    pages[pageindex].className = "active";
    if ((on_but = 0)) {
      var coursechage = getDesignData(pageindex, 20);
      onepagecourse(coursechage);
    } else {
      coursechage = getProgramData(pageindex, 20);
      onepagecourse(coursechage);
    }
  };
  rightChange[0].onclick = function() {
    if (pageindex === pages.length - 2) {
      return;
    }
    pageindex = pageindex + 1;
    clearPageNum();
    pages[pageindex].className = "active";
    if ((on_but = 0)) {
      var coursechage = getDesignData(pageindex, 20);
      onepagecourse(coursechage);
    } else {
      coursechage = getProgramData(pageindex, 20);
      onepagecourse(coursechage);
    }
  };
  // 按钮样式改变
  var bigButton1 = document.getElementById("big_button1");
  var bigButton2 = document.getElementById("big_button2");
  bigButton1.onclick = function() {
    if (on_but === 0) {
      return;
    }
    deletpagepoint(Math.ceil(courseProgramms.total / 20));
    createSeqEle(
      Math.ceil(courseDesigns.total / 20),
      "li",
      pagefather,
      rightChange
    );
    this.style.backgroundColor = "#3b9e32";
    this.style.color = "#ffffff";
    this.style.cursor = "default";
    bigButton2.style.backgroundColor = "#ffffff";
    bigButton2.style.color = "#666666";
    bigButton2.style.cursor = "pointer";
    on_but = 0;
    pageindex = 1;
    pages[pageindex].className = "active";
    pointpage();
    var coursechage = getDesignData(pageindex, 20);
    onepagecourse(coursechage);
  };
  bigButton2.onclick = function() {
    if (on_but === 1) {
      return;
    }
    deletpagepoint(Math.ceil(courseDesigns.total / 20));
    createSeqEle(
      Math.ceil(courseProgramms.total / 20),
      "li",
      pagefather,
      rightChange
    );
    this.style.backgroundColor = "#3b9e32";
    this.style.color = "#ffffff";
    this.style.cursor = "default";
    bigButton1.style.backgroundColor = "#ffffff";
    bigButton1.style.color = "#666666";
    bigButton1.style.cursor = "pointer";
    on_but = 1;
    pageindex = 1;
    pages[pageindex].className = "active";
    pointpage();
    coursechage = getProgramData(pageindex, 20);
    onepagecourse(coursechage);
  };
  setInterval(interrun, 5000);
  stopBannerChange();
  pointpage();
  nore();
  setInterval(addleftsize, 10);
  clickpoint();
  bannerrun();
})();
