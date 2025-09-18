from transformers import pipeline

chatbot = pipeline("text2text-generation", model="facebook/blenderbot-400M-distill")

print("🤖 Chatbot ready! Type 'quit' to exit.\n")

while True:
    msg = input("You: ")
    if msg.lower() in ["quit", "exit"]:
        break
    
    reply = chatbot(msg, max_length=200)
    print("Bot:", reply[0]['generated_text'])