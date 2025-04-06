onmessage = (e) => {
    postMessage(`Üdvözlet a Worker-től! Üzenet: ${e.data}`);
};
