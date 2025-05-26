(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function v(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(t){if(t.ep)return;t.ep=!0;const e=v(t);fetch(t.href,e)}})();(function(){const{createElement:i,Fragment:a}=React,{createRoot:v}=ReactDOM;function n(d){d.addEventListener("click",function(s){s.target===d&&d.close()})}window.closeModal=n;function t(){const d=document.querySelector(".modal1");if(!d){const l=document.createElement("div");l.innerHTML=`<dialog class="modal1" style="overflow-y:scroll; ">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div style="display: flex;">
                                <div>프로젝트 1에 업무가 추가되었습니다.</div>
                            </div>
                            <br/>
                            <div style="display: flex;">
                                <div style="font-size: small;">2025/05/05 12:00</div>
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="/icon/trash.png" style="height: 20px; width: 20px; margin-top:55px;"/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div style="display: flex;">
                                <div>QWER님께서 친구를 요청합니다.</div>
                                <button style="margin-left:10px;" class="button_ale">수락</button>
                                <button style="margin-left:5px;" class="button_ale">거부</button>
                            </div>
                            <br/>
                            <div style="display: flex;">
                                <div style="font-size: small;">2025/05/05 12:00</div>
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="/icon/trash.png" style="height: 20px; width: 20px; margin-top:55px;"/>
                            </div>
                        </td> 
                    </tr>
                    <tr>
                        <td>
                            <div style="display: flex;">
                                <div>프로젝트 2에 초대되었습니다.</div>
                                <div style="margin-left:10px;">(초대 유저: asdf12)</div>
                                <button style="margin-left:10px;" class="button_ale">수락</button>
                                <button style="margin-left:5px;" class="button_ale">거부</button>
                            </div>
                            <br/>
                            <div style="display: flex;">
                                <div style="font-size: small;">2025/05/05 12:00</div>
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="/icon/trash.png" style="height: 20px; width: 20px; margin-top:55px;"/>
                            </div>
                        </td> 
                    </tr>
                    <tr>
                        <td>
                            <div style="display: flex;">
                                <div>프로젝트 1에 업무가 추가되었습니다.</div>
                            </div>
                            <br/>
                            <div style="display: flex;">
                                <div style="font-size: small;">2025/05/05 12:00</div>
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="/icon/trash.png" style="height: 20px; width: 20px; margin-top:55px;"/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div style="display: flex;">
                                <div>프로젝트 2에 업무가 추가되었습니다.</div>
                            </div>
                            <br/>
                            <div style="display: flex;">
                                <div style="font-size: small;">2025/05/05 12:00</div>
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="/icon/trash.png" style="height: 20px; width: 20px; margin-top:55px;"/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div style="display: flex;">
                                <div>스크롤 확인용1</div>
                            </div>
                            <br/>
                            <div style="display: flex;">
                                <div style="font-size: small;">2025/05/05 12:00</div>
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="/icon/trash.png" style="height: 20px; width: 20px; margin-top:55px;"/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div style="display: flex;">
                                <div>스크롤 확인용1</div>
                            </div>
                            <br/>
                            <div style="display: flex;">
                                <div style="font-size: small;">2025/05/05 12:00</div>
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="/icon/trash.png" style="height: 20px; width: 20px; margin-top:55px;"/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div style="display: flex;">
                                <div>스크롤 확인용1</div>
                            </div>
                            <br/>
                            <div style="display: flex;">
                                <div style="font-size: small;">2025/05/05 12:00</div>
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="/icon/trash.png" style="height: 20px; width: 20px; margin-top:55px;"/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div style="display: flex;">
                                <div>스크롤 확인용1</div>
                            </div>
                            <br/>
                            <div style="display: flex;">
                                <div style="font-size: small;">2025/05/05 12:00</div>
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src="/icon/trash.png" style="height: 20px; width: 20px; margin-top:55px;"/>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div style="display: flex; justify-content: flex-end; ">
                <form method="dialog">
                    <button style="background-color:none; border:none;" class="font1">닫기</button>
                </form>  
            </div>
        </dialog>`,document.body.appendChild(l);const o=document.querySelector(".modal1");n(o)}document.querySelector("#alert").addEventListener("click",()=>{d.showModal()})}function e(){const d=document.querySelector(".modal2");if(!d){const l=document.createElement("div");l.innerHTML=`
        <dialog class="modal2">
            <div style="margin-top:30px;">
                <div>
                    <button class="button_friend" onclick="Watchdiv('1')">친구 목록</button>
                </div>
                <div>
                    <button class="button_friend" onclick="Watchdiv('2')">유저 찾기</button>
                </div>
                <div>
                    <button class="button_friend" onclick="Watchdiv('3')">요청 대기</button>
                </div>
            </div>
            <div>
            <div class="box_friend">
                <div id="1">
                    <div class="green" style="text-align: center;">친구 목록</div>
                    <div style="width: 100%;">
                        <hr style="border: 1px solid rgb(0, 0, 0); "/>
                    </div>
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th><img src="/icon/user2.png" style="height: 25px; width: 25px; "/></th>
                                <th>닉네임</th>
                                <th>#태그</th>
                                <th>마지막 접속시간</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>

                            </tr>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div id="2">
                    <div class="green" style="text-align: center;">유저 찾기</div>
                    <div style="width: 100%;">
                        <hr style="border: 1px solid rgb(0, 0, 0); "/>
                    </div>
                    <div style="margin-bottom: 10px; margin-left: 10px;">
                        <input class="button_find2" type="text" id="findid" placeholder="닉네임 #태그"/>
                        <img src="/icon/finding.png" style="height: 25px; width: 25px;" class="margin2 drag1"/>
                    </div>
                    <div style="margin-left: 10px;">

                        <div class="box8 ">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th><img src="/icon/user2.png" style="height: 25px; width: 25px; margin:5px;"/></th>
                                        <th>닉네임</th>
                                        <th>#태그</th>
                                        <th><img src="/icon/adduser.png" style="height: 15px; width: 15px;"/></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>1</td>
        
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>1</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div id="3">
                    <div class="green" style="text-align: center;">요청 대기</div>
                    <div style="width: 100%;">
                        <hr style="border: 1px solid rgb(0, 0, 0); "/>
                    </div>
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th><img src="/icon/user2.png" style="height: 25px; width: 25px; margin:5px;"/></th>
                                <th>닉네임</th>
                                <th>#태그</th>
                                <th>수락</th>
                                <th>거절</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td><button style="background-color:rgb(55,158,144);">수락</button></td>
                            <td><button style="background-color:rgb(255,127,127);">거절</button></td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td><button style="background-color:rgb(55,158,144);">수락</button></td>
                            <td><button style="background-color:rgb(255,127,127);">거절</button></td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td><button style="background-color:rgb(55,158,144);">수락</button></td>
                            <td><button style="background-color:rgb(255,127,127);">거절</button></td>
                            
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td><button style="background-color:rgb(55,158,144);">수락</button></td>
                            <td><button style="background-color:rgb(255,127,127);">거절</button></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
              </div>
            </div>
            <div style="display: flex; justify-content: flex-end; margin-top:450px; ">
                <form method="dialog">
                    <button style="background-color:none; border:none;" class="font1">닫기</button>
                </form>  
            </div>
        </dialog>`,document.body.appendChild(l);const o=document.querySelector(".modal2");n(o)}document.querySelector("#friend").addEventListener("click",()=>{d.showModal()})}function r(d){["1","2","3"].forEach(o=>{const c=document.getElementById(o);c&&(c.style.display=o===d?"block":"none")}),document.querySelectorAll(".button_friend").forEach((o,c)=>{(c+1).toString()===d?o.classList.add("active"):o.classList.remove("active")})}window.addEventListener("load",()=>r("1")),window.Watchdiv=r;function y(){confirm("로그아웃 하겠습니까?")&&(window.location.href="index.html")}window.logout=y;function u(){const d=document.querySelector(".modal3");if(!d){const l=document.createElement("div");l.innerHTML=`
      <dialog class="modal3">
        <div class="middle3">
        
            <div style="display: flex; justify-content: flex-end;" >
                <form method="dialog">
                    <button style="background-color:none; border:none;" class="font1">X</button>
                </form>
            </div>

            <div style="display: flex;">
                <img src="/icon/user2.png" style="height:100px; width:100px; margin:30px;"/>
                <div style="margin:50px ;">
                    <div class="black">닉네임</div>
                    <div style="display: flex;">
                        <div style="color:green">아이디</div>
                        <div style="color:green">#태그</div>
                    </div>
                    <div>자기소개</div>
                </div>
            </div>
    
            <div style="display: flex; justify-content: flex-end; margin:5px 5px 0 0; ">
                <button class="button_pro" style="margin-right:5px;" onclick="window.location.href='profile.html';">프로필 수정</button>
                <button class="button_pro" onclick="logout()">로그아웃</button>
            </div>
        </div>  
      </dialog>`,document.body.appendChild(l);const o=document.querySelector(".modal3");n(o)}document.querySelector("#mypage").addEventListener("click",()=>{d.showModal()})}function p(){window.location.href="projectlist.html"}function g(){return i("div",{className:"root"},i("button",{className:"left1 drag1 clear",onClick:p},i("img",{src:"icon/logo.png",className:"logo",style:{height:"50px"}})),i("button",{className:"right3 drag1 clear",onClick:u,id:"mypage"},i("i",{className:"fa-solid fa-user fa-2x",style:{fontSize:"25px"}})),i("button",{className:"right2 drag1 clear",onClick:e,id:"friend"},i("i",{className:"fa-solid fa-user-group fa-2x",style:{fontSize:"25px"}})),i("button",{className:"right1 drag1 clear",onClick:t,id:"alert"},i("i",{className:"fa-solid fa-bell fa-2x",style:{fontSize:"25px"}})))}v(document.getElementById("root")).render(i(g));let h=document.querySelector("#root"),m=new MutationObserver(()=>{t(),e(),u()});window.onload=function(){t(),e(),u()};let b={attributes:!0,childList:!0,characterData:!0};m.observe(h,b)})();
