import sys
import os
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

import logging

import uvicorn
from utils.date import get_max_age

logging.basicConfig(level=logging.INFO)

if __name__ == "__main__":
    uvicorn.run(
        "app:app",
        port=8000,
        log_level="info",
        reload=True,
        root_path="/api"
    )
