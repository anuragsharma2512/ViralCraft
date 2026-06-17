from fastapi import FastAPI

app = FastAPI(
    title="ViralCraft AI API",
    version="1.0.0"
)

@app.get("/")
def root():
    return {
        "status": "running"
    }