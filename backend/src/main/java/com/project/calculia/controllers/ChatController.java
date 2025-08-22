package com.project.calculia.controllers;

import java.util.Map;
import org.springframework.ai.ollama.OllamaChatModel;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@CrossOrigin(origins = "https://projetc-calculia-me6d.vercel.app")
public class ChatController {

    private final OllamaChatModel chatModel;

    public ChatController(OllamaChatModel chatModel) {
        this.chatModel = chatModel;
    }

    @PostMapping("/ai/prompt")
    public Map<String, String> generateResponse(@RequestBody String request) {

        return Map.of("generation", this.chatModel.call(request));
    }

}