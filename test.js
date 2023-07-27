function createMenu({ title, body, buttonText, cancellable }) {
  console.log(title);
  console.log(body);

  if (!cancellable) {
    console.log("Cancelled");
  }
}

function createMenu(post) {
  const { title, body, buttonText, cancellable } = post;
  // const title = post.title
  // const body = post.body
  // const buttonText = post.buttonText
  // const cancellable = post.cancellable

  console.log(title);
  console.log(body);
}

createMenu({
  title: "Foo",
  body: "Bar",
  buttonText: "Baz",
  cancellable: true,
});

/**
 * Function sendEmail().
 *
 * Getting data from api dialect.
 * @param {object} propertyNotif - Property object from notification
 * @param {object} propertyQuery - Property object data from query
 * @return Object
 */
function sendEmail(propertyNotif, propertyQuery) {
  // some of code here
}
