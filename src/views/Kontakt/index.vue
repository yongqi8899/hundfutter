<template>
  <div class="kontakt">
    <form id="form">
      <input id="name" type="text" placeholder="NAME" />
      <input id="email" type="text" placeholder="E-MAIL" />
      <textarea id="message" type="text" placeholder="MESSAGE"></textarea>
      <my-btn :title="'KONTAKT'" :type="submit" :theme="'color'" class="btn" />
    </form>
  </div>
</template>

<style scoped>
::-webkit-input-placeholder {
  /* WebKit browsers */
  color: pink;
}
::-webkit-input-placeholder:hover {
  /* WebKit browsers */
  color: pink;
}

::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: pink;
}

:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: pink;
}
.kontakt {
  position: relative;
  height: 80vh;
}
#form {
  height: 580px;
  padding: 80px 40px;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
input {
  font-size: 0.875em;
  width: 500px;
  height: 50px;
  padding: 0px 15px 0px 15px;
  background: transparent;
  outline: none;
  color: var(--themeColor);

  border: solid 1px var(--themeColor);
  border-bottom: none;

  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
}

input:hover {
  background: var(--themeColor);
  color: white;
}

textarea {
  width: 500px;
  height: 110px;
  padding: 15px;

  background: transparent;
  outline: none;

  color: var(--themeColor);
  font-size: 0.875em;

  border: solid 1px var(--themeColor);

  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
}

textarea:hover {
  background: var(--themeColor);
  color: white;
}

.btn {
  width: 500px;
  padding: 0;
  margin: -5px 0px 0px 0px;
  font-size: 0.875em;
  color: var(--themeColor);

  outline: none;
  cursor: pointer;

  border: solid 1px var(--themeColor);
  border-top: none;
}

.btn:hover {
  color: var(--themeColor);
}
</style>
