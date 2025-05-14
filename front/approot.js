(function() {
  const { createElement, Fragment } = React;
  const { createRoot } = ReactDOM;

  function openAlert() {
    window.open('alert_pop.html', 'Alert', 'width=500,height=800');
    // const modalBtn = document.querySelector(".modal-Btn");
    // const modal = document.querySelector(".modal");

    // modalBtn.addEventListener("click", () => {
    //     modal.showModal();
    // })
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
      { className: 'right1 drag1 clear', onClick: openAlert },
      createElement('i', { className: 'fa-solid fa-bell fa-2x', style: { fontSize: '25px'} })
    )
  );

}
  createRoot(document.getElementById('root')).render(createElement(approot));
})();

/*(function() {
  const { createElement, Fragment } = React;
  const { createRoot } = ReactDOM;

  // function openAlert() {
  //   //window.open('alert_pop.html', 'Alert', 'width=500,height=800');
  //   // const modal = document.querySelector('dialog.modal1');
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