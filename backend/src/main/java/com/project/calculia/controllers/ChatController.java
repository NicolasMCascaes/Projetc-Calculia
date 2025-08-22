package com.project.calculia.controllers;

import java.util.Map;

import org.springframework.ai.chat.model.ChatResponse;
import org.springframework.ai.chat.model.Generation;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.ai.ollama.OllamaChatModel;
import org.springframework.ai.ollama.api.OllamaApi.ChatRequest;
import org.springframework.web.bind.annotation.RestController;

import com.project.calculia.dto.PromptRequest;

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
    public Map<String, Generation> generateResponse(@RequestBody PromptRequest request) {
        String userMessage = request.getMessage();
        Prompt prompt = new Prompt(userMessage);
        ChatResponse chatResponse = chatModel.call(prompt);
        Generation responseText = chatResponse.getResult();
        return Map.of("generation", responseText);
    }

}