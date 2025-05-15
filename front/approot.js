(function() {
  const { createElement, Fragment } = React;
  const { createRoot } = ReactDOM;
  
  function openAlert() {
    const modal = document.querySelector(".modal1");
    
    if (!modal) {
      const div = document.createElement("div");
      div.innerHTML =  `<dialog class="modal1" style="overflow-y:scroll;">
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
                                <img src="icon_root/trash.png" style="height: 20px; width: 20px; margin-top:55px;"/>
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
                                <img src="icon_root/trash.png" style="height: 20px; width: 20px; margin-top:55px;"/>
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
                                <img src="icon_root/trash.png" style="height: 20px; width: 20px; margin-top:55px;"/>
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
                                <img src="icon_root/trash.png" style="height: 20px; width: 20px; margin-top:55px;"/>
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
                                <img src="icon_root/trash.png" style="height: 20px; width: 20px; margin-top:55px;"/>
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
                                <img src="icon_root/trash.png" style="height: 20px; width: 20px; margin-top:55px;"/>
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
                                <img src="icon_root/trash.png" style="height: 20px; width: 20px; margin-top:55px;"/>
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
                                <img src="icon_root/trash.png" style="height: 20px; width: 20px; margin-top:55px;"/>
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
                                <img src="icon_root/trash.png" style="height: 20px; width: 20px; margin-top:55px;"/>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>`;
        document.body.appendChild(div);
    }
    
    //window.open('alert_pop.html', 'Alert', 'width=500,height=800');
    const modalBtn = document.querySelector("#alert");
    

    modalBtn.addEventListener("click", () => {
        modal.showModal();
    }
  );
   
  }
  function openFriend() {
    window.open('friend_pop.html', 'Friend', 'width=800,height=800');
  }
  function openMyPage() {
    window.open('mypage_pop.html', 'Mypage', 'width=800,height=800');
  }
  function openProjectList() {
    window.location.href=('projectlist.html');
  }

  function approot() {
  return createElement(
    'div',
    { className: 'root' },
    
    createElement(
      'button',
      { className: 'left1 drag1 clear', onClick: openProjectList},
      createElement('img', { src: 'icon_root/logo.png', className: 'logo', style: {height: '50px'} })
    ),

    createElement(
      'button',
      { className: 'right3 drag1 clear', onClick: openMyPage},
      createElement('i', { className: 'fa-solid fa-user fa-2x', style: { fontSize: '25px'} })
    ),

    createElement(
      'button',
      { className: 'right2 drag1 clear', onClick: openFriend },
      createElement('i', { className: 'fa-solid fa-user-group fa-2x', style: { fontSize: '25px'} })
    ),
    
    createElement(
      'button',
      { className: 'right1 drag1 clear', onClick: openAlert, id:'alert' },
      createElement('i', { className: 'fa-solid fa-bell fa-2x', style: { fontSize: '25px'}})
    )
  );

}
  createRoot(document.getElementById('root')).render(createElement(approot));


  window.onload = function() {openAlert();};

  let target = document.querySelector("#root");
  let observer = new MutationObserver((mutations) => {
    openAlert();
});
  let option = { attributes: true, childList: true, characterData: true };
  observer.observe(target, option);
})();

/*(function() {
  const { createElement, Fragment } = React;
  const { createRoot } = ReactDOM;

  // function openAlert() {
  //   //window.open('alert_pop.html', 'Alert', 'width=500,height=800');
  //   // const modal = document.querySelector('.dialog.modal1');
  //   // if (modal) {
  //   //   modal.showModal();
  //   // } 
  //   if (dialogRef.current) dialogRef.current.showModal();
  // }
  
  function openFriend() {
    window.open('friend_pop.html', 'Friend', 'width=800,height=800');
  }
  function openMyPage() {
    window.open('mypage_pop.html', 'Mypage', 'width=800,height=800');
  }
  function openProjectList() {
    window.location.href=('projectlist.html');
  }

  function approot() {
    
    return createElement(
      // Fragment,
      // null,
      'div',
      { className: 'root' },
      
      createElement(
        'button',
        { className: 'left1 drag1 clear', onClick: openProjectList},
        createElement('img', { src: 'icon_root/logo.png', className: 'logo', style: {height: '50px'} })
      ),

      createElement(
        'button',
        { className: 'right3 drag1 clear', onClick: openMyPage},
        createElement('i', { className: 'fa-solid fa-user fa-2x', style: { fontSize: '25px'} })
      ),

      createElement(
        'button',
        { className: 'right2 drag1 clear', onClick: openFriend },
        createElement('i', { className: 'fa-solid fa-user-group fa-2x', style: { fontSize: '25px'} })
      ),
      
      createElement(
        'button',
        { className: 'right1 drag1 clear', onClick: openAlert },
        createElement('i', { className: 'fa-solid fa-bell fa-2x', style: { fontSize: '25px'} })
      )
    );

}
  createRoot(document.getElementById('root')).render(createElement(approot));
})();
*/