function *consoleGenerator(messages:Array<string> = ["Dans la classe 🟢", "Dans la fonction 🔵"]){
    for(const message of messages){
        yield "console generator says: " + message;
    }
}

export { consoleGenerator }