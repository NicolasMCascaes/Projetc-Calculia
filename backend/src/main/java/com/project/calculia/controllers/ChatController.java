package com.project.calculia.controllers;

import java.util.Map;
import org.springframework.ai.ollama.OllamaChatModel;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class ChatController {

    private final OllamaChatModel chatModel;

    public ChatController(OllamaChatModel chatModel) {
        this.chatModel = chatModel;
    }

    @CrossOrigin(origins = "*")
    @PostMapping("/ai/prompt")
    public Map<String, String> generateResponse(@RequestBody String request) {

        return Map.of("generation", this.chatModel.call(request));
    }

}