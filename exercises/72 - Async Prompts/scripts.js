function wait(ms = 0) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function ask(options) {
  return new Promise(async function(resolve) {
    // create a pop up with all the fields
    const popup = document.createElement("form");
    popup.classList.add("popup");
    popup.insertAdjacentHTML(
      "afterbegin",
      `
    <fieldset>
    <label>${options.title}</label>
    </fieldset>`
    );

    // check if they want a cancel button
    if (options.cancel) {
      const skipButton = document.createElement("button");
      skipButton.type = "button";
      skipButton.textContent = "cancel";
      /// listen for a click in the button
    }

    // listen for the submit event on the inputs

    // when someone does submit it, resolve the data that was in the input box

    //insert that popup into the dom
    document.body.appendChild(popup);
    await wait(50);
    popup.classList.add("open");
  });
}
