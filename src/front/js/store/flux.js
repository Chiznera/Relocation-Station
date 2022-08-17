const getState = ({ getStore, getActions, setStore }) => {
  let BACKEND_URL = process.env.BACKEND_URL;
  return {
    store: {
      favorites: [],
      alert: {
        type: "",
        msg: "",
        show: false,
      },
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
      basic: [],
      stateInfo: [],
      singleState: {
        cities: [],
      },
      city: [],
      stateCities: {},
    },
    actions: {
      addFavorites: (data) => {
        const store = getStore();
        store.favorites.push(data);
        setStore(store);
      },

      deleteFavorites: (index) => {
        const store = getStore();
        const newArray = store.favorites.filter((item, i) => i != index);
        setStore({
          favorites: newArray,
        });
      },


      setAlert: (payload) => {
        /* payload should be an object with the following shape:
                    {
                        type: "",
                        msg: "",
                        show: false
                    }
                    type either: danger, success, warning
                */
        setStore({ alert: payload });
      },
      resetAlert: () => {
        setStore({
          alert: {
            type: "",
            msg: "",
            show: false,
          },
        });
      },

      signup: (data) => {
        const store = getStore();

        return fetch(`${BACKEND_URL}/api/signup`, {
          method: "POST",

          headers: { "Content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => {
            if (res.status === 409)
              throw new Error(
                "The email address already exists. Please login to your account to continue."
              );

            return res.json();
          })
          .then((data) => {
            console.log("data ", data);
            getActions().setAlert({
              type: "success",
              msg: data.msg,
              show: true,
            });

            return true;
          })
          .catch((err) => err);
      },

      getMoreStates: () => {
        fetch(`${process.env.BACKEND_URL}/api/states`)
          .then((resp) => resp.json())
          .then((data) => {
            setStore({ basic: data.civilserviceusa });
            setStore({ city: data.cities });
          });
      },
      getState: async (state) => {
        const resp = await fetch(
          `${process.env.BACKEND_URL}/api/states/${state}`
        );
        const store = getStore();
        try {
          const data = await resp.json();
          console.log(data);
          setStore({ singleState: data });
          // store.singleState = data.state_info;
          // setStore(store);
          console.log(store);
        } catch (error) {
          console.log(error);
        }
      },

      getCities: async () => {
        const resp = await fetch(`${process.env.BACKEND_URL}/api/city`);

        try {
          const data = await resp.json();
          console.log(data);
          setStore({ city: data });
        } catch (error) {
          console.log(error);
        }
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
