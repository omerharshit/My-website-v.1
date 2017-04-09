<!DOCTYPE html>
<html>
<head>
	<title></title>
	
</head>
<body>
  <div class="malarkey">Hii</div>
  <script src="/harshitomer.ml/js/malarkey.min.js"></script>
  <script>
    var elem = document.querySelector('.malarkey');
    var opts = {
      typeSpeed: 50,
      deleteSpeed: 50,
      pauseDelay: 2000,
      loop: true,
      postfix: ''
    };
    var m = malarkey(elem, opts).type('Say hello')   .pause().delete()
                                .type('Wave goodbye').pause().delete();
    document.addEventListener('click', function() {
      if (m.isRunning()) {
        m.triggerPause();
        elem.style.color = 'red';
      } else {
        m.triggerResume();
        elem.style.color = 'black';
      }
    });
  </script>
</body>
</html>