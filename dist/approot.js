const x=""+new URL("icon/logo.png",import.meta.url).href,n=""+new URL("icon/trash.png",import.meta.url).href,s=""+new URL("icon/user2.png",import.meta.url).href,w=""+new URL("icon/finding.png",import.meta.url).href;(function(){const{createElement:o,Fragment:k}=React,{createRoot:u}=ReactDOM;function a(t){t.addEventListener("click",function(d){d.target===t&&t.close()})}window.closeModal=a;function r(){const t=document.querySelector(".modal1");if(!t){const i=document.createElement("div");i.innerHTML=`<dialog class="modal1" style="overflow-y:scroll; ">
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
                                <img src="${n}" style="height: 20px; width: 20px; margin-top:55px;"/>
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
                                <img src="${n}" style="height: 20px; width: 20px; margin-top:55px;"/>
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
                                <img src="${n}" style="height: 20px; width: 20px; margin-top:55px;"/>
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
                                <img src="${n}" style="height: 20px; width: 20px; margin-top:55px;"/>
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
                                <img src="${n}" style="height: 20px; width: 20px; margin-top:55px;"/>
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
                                <img src="${n}" style="height: 20px; width: 20px; margin-top:55px;"/>
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
                                <img src="${n}" style="height: 20px; width: 20px; margin-top:55px;"/>
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
                                <img src="${n}" style="height: 20px; width: 20px; margin-top:55px;"/>
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
                                <img src="${n}" style="height: 20px; width: 20px; margin-top:55px;"/>
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
        </dialog>`,document.body.appendChild(i);const e=document.querySelector(".modal1");a(e)}document.querySelector("#alert").addEventListener("click",()=>{t.showModal()})}function c(){const t=document.querySelector(".modal2");if(!t){const i=document.createElement("div");i.innerHTML=`
        <dialog class="modal2" style="border: none; background-color: transparent;">
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
                                <th><img src="${s}" style="height: 25px; width: 25px; "/></th>
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
                    <div style="margin: 0; padding: 0; white-space: normal;">
                        <div class="box10">
                            <div class="green">유저 찾기</div>

                            <div class="container_radio">
                                <input type="radio" name="option" style="height:15px; width:15px; margin: 5px;" checked="checked"><span>친구</span>
                                <input type="radio" name="option" style="height:15px; width:15px; margin: 5px; margin-left: 35px;"><span>전체</span>
                            </div>

                            <div class="find">
                                <input class="button_find" type="text" id="find" placeholder="아이디 / 태그로 유저 검색" style="font-size: small; width: 400px;"/> 
                                <img src="${w}" style="width: 25px; height: 25px; margin: 5px; margin-left: auto;"/>                    
                            </div>
                    

                            <div class="box11">
                                <table class="table table-hover" style="border-collapse: separate; border-spacing: 0;">
                                    <thead>
                                        <tr>
                                            <th style="width: 55px;"></th>
                                            <th style="width: 100px;">닉네임</th>
                                            <th style="width: 100px;">아이디</th>
                                            <th style="width: 60px;">#태그</th>
                                            <th style="width: 50px;">선택</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <img src="${s}" style="height: 30px; width: 30px; margin:5px;"/>
                                            </td>
                                            <td class="lenCut_container">
                                                <span class="lenCut">닉네임이아주아주아주길어요</span>
                                                <div class="tooltip1" id="tooltip"></div>                                                      
                                            </td>
                                            <td>
                                                <div class="lenCut_container">
                                                    <span class="lenCutE" style="font-size: small; color: rgba(0, 0, 0, 0.5);">identification123</span>                            
                                                    <div class="tooltip1" id="tooltip"></div>                                        
                                                </div>                            
                                            </td>
                                            <td>
                                                <span style="color: #3a6b5b;">#0000</span>                               
                                            </td>  
                                            <td>
                                                <button class="button_select">선택</button>
                                            </td>                           
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src="${s}" style="height: 30px; width: 30px; margin:5px;"/>
                                            </td>
                                            <td class="lenCut_container">
                                                <span class="lenCut">정예은</span>
                                                <div class="tooltip1" id="tooltip"></div>                                                      
                                            </td>
                                            <td>
                                                <div class="lenCut_container">
                                                    <span class="lenCutE" style="font-size: small; color: rgba(0, 0, 0, 0.5);">yeeun13</span>                            
                                                    <div class="tooltip1" id="tooltip"></div>                                        
                                                </div>                            
                                            </td>
                                            <td>
                                                <span style="color: #3a6b5b;">#3697</span>                               
                                            </td>  
                                            <td>
                                                <button class="button_select">선택</button>
                                            </td>                           
                                        </tr>
                                        <tr><td>
                                            스크롤 테스트용 아무말 ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ
                                            ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ
                                        </td></tr>
                                    </tbody>
                                </table>
                            </div>
                            <br/>
                            <div>
                                <button class="button_final">선택완료</button>
                            </div>
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
                                <th><img src="${s}" style="height: 25px; width: 25px; margin:5px;"/></th>
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
        </dialog>`,document.body.appendChild(i);const e=document.querySelector(".modal2");a(e)}document.querySelector("#friend").addEventListener("click",()=>{t.showModal()})}function p(t){["1","2","3"].forEach(e=>{const l=document.getElementById(e);l&&(l.style.display=e===t?"block":"none")}),document.querySelectorAll(".button_friend").forEach((e,l)=>{(l+1).toString()===t?e.classList.add("active"):e.classList.remove("active")})}window.addEventListener("load",()=>p("1")),window.Watchdiv=p;function y(){confirm("로그아웃 하겠습니까?")&&(window.location.href="index.html")}window.logout=y;function v(){const t=document.querySelector(".modal3");if(!t){const i=document.createElement("div");i.innerHTML=`
      <dialog class="modal3">
        <div class="middle3">
        
            <div style="display: flex; justify-content: flex-end;" >
                <form method="dialog">
                    <button style="background-color:none; border:none;" class="font1">X</button>
                </form>
            </div>

            <div style="display: flex;">
                <img src="${s}" style="height:100px; width:100px; margin:30px;"/>
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
      </dialog>`,document.body.appendChild(i);const e=document.querySelector(".modal3");a(e)}document.querySelector("#mypage").addEventListener("click",()=>{t.showModal()})}document.querySelectorAll(".lenCut_container").forEach(t=>{const d=t.querySelector(".lenCut"),i=t.querySelector(".lenCutE"),e=t.querySelector(".tooltip1");if(d){const l=d.textContent;l.length>6&&(d.textContent=l.slice(0,6)+"...",d.addEventListener("mouseenter",function(){e.style.display="block",e.textContent=l}),d.addEventListener("mouseleave",function(){e.style.display="none"}))}if(i){const l=i.textContent;l.length>15&&(i.textContent=l.slice(0,15)+"...",i.addEventListener("mouseenter",function(){e.style.display="block",e.textContent=l}),i.addEventListener("mouseleave",function(){e.style.display="none"}))}}),document.querySelectorAll(".button_select").forEach(t=>{let d=!1;t.addEventListener("click",()=>{d=!d,t.classList.toggle("active"),d?t.textContent="취소":t.textContent="선택"}),t.addEventListener("mouseenter",()=>{d&&(t.textContent="취소")}),t.addEventListener("mouseleave",()=>{d&&(t.textContent="선택")})});function h(){window.location.href="projectlist.html"}function m(){return o("div",{className:"root"},o("button",{className:"left1 drag1 clear",onClick:h},o("img",{src:x,className:"logo",style:{height:"50px"}})),o("button",{className:"right3 drag1 clear",onClick:v,id:"mypage"},o("i",{className:"fa-solid fa-user fa-2x",style:{fontSize:"25px"}})),o("button",{className:"right2 drag1 clear",onClick:c,id:"friend"},o("i",{className:"fa-solid fa-user-group fa-2x",style:{fontSize:"25px"}})),o("button",{className:"right1 drag1 clear",onClick:r,id:"alert"},o("i",{className:"fa-solid fa-bell fa-2x",style:{fontSize:"25px"}})))}u(document.getElementById("root")).render(o(m));let b=document.querySelector("#root"),g=new MutationObserver(()=>{r(),c(),v()});window.onload=function(){r(),c(),v()};let f={attributes:!0,childList:!0,characterData:!0};g.observe(b,f)})();
