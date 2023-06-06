import PropTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";
import isUndefined from "lodash/isUndefined";
import omitBy from "lodash/omitBy";
import Firebase from "./Firebase";
import { config } from "./constants";
import noop from "lodash/noop";

const FirebaseContext = createContext({});
export default function FirebaseProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [firebaseInstance] = useState(() => new Firebase(config));

  const defaultFilterQuery = [];

  const getDocuments = ({ filters = [], withDefaultFilter = true, ...rest }) =>
    firebaseInstance.getDocuments({
      filters: withDefaultFilter
        ? [...defaultFilterQuery, ...filters]
        : filters,
      ...rest,
    });
  const onCollectionChange = ({
    filters = [],
    withDefaultFilter = true,
    ...rest
  }) =>
    firebaseInstance.onCollectionChange({
      filters: withDefaultFilter
        ? [...defaultFilterQuery, ...filters]
        : filters,
      ...rest,
    });

  const createDocument = (data, options) => {
    const validated = omitBy(data, isUndefined);
    return firebaseInstance.createDocument(
      { ...validated, userId: currentUser.id },
      options
    );
  };
  const updateDocument = (data, options) => {
    const validated = omitBy(data, isUndefined);
    return firebaseInstance.updateDocument(
      { ...validated, userId: currentUser.id },
      options
    );
  };

  useEffect(() => {
    const unsubscriber = firebaseInstance.subscribeAuthStateChange((user) => {
      setCurrentUser(user);
      console.log(user);
    });

    return unsubscriber;
  }, [firebaseInstance]);

  return (
    <FirebaseContext.Provider
      value={{
        ...firebaseInstance,
        getDocuments,
        onCollectionChange,
        createDocument,
        updateDocument,
        currentUser,
        isAuthenticated: !!currentUser,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
}
FirebaseProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useFirebase = () => useContext(FirebaseContext);

export const useFirebaseSubscriptions = ({ subscriptions = [], deps = [] }) => {
  const { currentUser, onCollectionChange } = useFirebase();
  useEffect(() => {
    if (!currentUser) {
      return noop;
    }
    let unsubscribers = [];
    subscriptions.forEach((subscription) => {
      onCollectionChange(subscription)
        .then((unsubscribeFn) => {
          unsubscribers.push(unsubscribeFn);
        })
        .catch((err) => {
          console.error("Subscription failed: ", err);
        });
    });

    return () => {
      unsubscribers.forEach((unsubscribe) => unsubscribe());
      unsubscribers = [];
    };
  }, [currentUser, ...deps]);
};
