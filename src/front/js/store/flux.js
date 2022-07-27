const getState = ({ getStore, getActions, setStore }) => {
  let BACKEND_URL = process.env.BACKEND_URL;
  return {
    store: {
      token: null,
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      // getStates: () => {
      //   fetch(
      //     "https://3001-chiznera-relocationstat-ztly2rvjwxf.ws-us54.gitpod.io/api/statedata"
      //   )
      //     .then((resp) => resp.json())
      //     .then((data) => setStore({ basic: data }));
      // },
      getMoreStates: () => {
        fetch(`${process.env.BACKEND_URL}/api/statedata`)
          .then((resp) => resp.json())
          .then((data) => {
            setStore({ basic: data.rapidapi });
            setStore({ stateInfo: data.civilserviceusa });
          });
        console.log("looking for state info", getStore().stateInfo);
      },
      syncTokenFromSessionStore: () => {
        const token = sessionStore.getItem("token");
        console.log(
          "Application just loaded, syncing the session storage token"
        );
        if (token && token != "" && token != undefined)
          setStore({ token: token });
      },

      login: async (email, password) => {
        console.log("email: " + email, "password: " + password);
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        };
        // fetch(BACKEND_URL + "/api/login", opts)
        //   .then((resp) => resp.json())
        //   .then((data) => console.log(data));
        try {
          const resp = await fetch(BACKEND_URL + "/api/login", opts);
          if (resp.status !== 200) {
            alert("An error has occurred");
            return false;
          }

          const data = await resp.json();
          console.log("this came from the backend", data);
          sessionStorage.setItem("token", data.access_token); //Access token needed here
          setStore({ token: data.access_token });
          return true;
        } catch (error) {
          console.error("There has be an error logging in", error);
        }
      },
    },
  };
};

export default getState;
