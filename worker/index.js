import handler from "vinext/server/app-router-entry";

const worker = {
  fetch(request, env, context) {
    return handler.fetch(request, env, context);
  },
};

export default worker;
