const getState = ({ getStore, getActions, setStore }) => {
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
      exampleFunction: () => {
        getActions().changeColor(0, "green");
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

        try {
          const resp = await fetch(
            "https://3000-chiznera-relocationstat-pzijzbodj3o.ws-us54.gitpod.io/api/token",
            opts
          );
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
          console.error("There has be an error logging in");
        }
      },
    },

    getMessage: () => {
      const store = getStore();
      const opts = {
        headers: {
          Authorization: "Bearer" + store.token,
        },
      };
      // fetching data from the backend
      fetch(process.env.BACKEND_URL + "/api/hello", opts)
        .then((resp) => resp.json())
        .then((data) => setStore({ message: data.message }))
        .catch((error) =>
          console.log("Error loading message from backend", error)
        );
    },
    changeColor: (index, color) => {
      //get the store
      const store = getStore();

      //we have to loop the entire demo array to look for the respective index
      //and change its color
      const demo = store.demo.map((elm, i) => {
        if (i === index) elm.background = color;
        return elm;
      });

      //reset the global store
      setStore({ demo: demo });
    },
  };
};

export default getState;
