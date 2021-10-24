$.ajax({
  type: "POST",
  url: "~/chatbot.py",
  data: { param: text}
}).done(function( o ) {
   // do something
});