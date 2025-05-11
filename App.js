(function() {
  const { createElement, Fragment } = React;
  const { createRoot } = ReactDOM;

  function openAlert() {
    window.open('alert_pop.html', 'Alert', 'width=500,height=800');
  }
  function openFriend() {
    window.open('friend_pop.html', 'Friend', 'width=800,height=800');
  }
  function openMyPage() {
    window.open('mypage_pop.html', 'Mypage', 'width=800,height=800');
  }

  function App() {
  return createElement(
    'div',
    { className: 'root' },

    createElement(
      'button',
      { className: 'right3 drag1', onClick: openMyPage },
      createElement('i', { className: 'fa-solid fa-user fa-2x' })
    ),

    createElement(
      'button',
      { className: 'right2 drag1', onClick: openFriend },
      createElement('i', { className: 'fa-solid fa-user-group fa-2x' })
    ),
    
    createElement(
      'button',
      { className: 'right1 drag1', onClick: openAlert },
      createElement('i', { className: 'fa-solid fa-bell fa-2x' })
    )
  );
}
  createRoot(document.getElementById('root')).render(createElement(tooo));
})();