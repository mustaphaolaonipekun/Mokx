const time = setInterval(() => {
  const currentTime = new Date();
  document.getElementById("time").textContent = currentTime.toLocaleTimeString(
    [],
    {
      hour: "2-digit",
      minute: "2-digit",
    }
  );
}, 1000);

Get = (form) => {
  const InputValue = form.inputBox.value;
};

Get();

newGet = () => {
  const NewValue = InputValue;
};

newGet();
