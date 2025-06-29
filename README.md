<div align="center" style="font-family: charter;">

<h1>OWLViz: An Open-World Benchmark for Visual Question Answering</h1>

<img src="docs/resources/preview.png" width="50%"/>
<br />

<a href="https://arxiv.org/abs/2503.07631" target="_blank">
    <img alt="arXiv" src="https://img.shields.io/badge/arXiv-OWLViz-red?logo=arxiv" height="20" />
</a>
<a href="https://github.com/your-org/OWLViz" target="_blank">
    <img alt="GitHub repo" src="https://img.shields.io/badge/GitHub-Repository-blue?logo=github" height="20" />
</a>
<a href="https://huggingface.co/datasets/your-dataset/OWLViz" target="_blank">
    <img alt="HF Dataset" src="https://img.shields.io/badge/%F0%9F%93%9A%20Dataset-OWLViz-ff69b4" height="20" />
</a>

<div>
    <a href="https://author1-profile" target="_blank">Thuy Nguyen</a><sup>1</sup>,
    <a href="https://author2-profile" target="_blank">Dang Nguyen</a><sup>2</sup>,
    <a href="https://author3-profile" target="_blank">Hoang Nguyen</a><sup>3</sup>,
    <a href="https://author4-profile" target="_blank">Thuan Luong</a><sup>3</sup>,
    <a href="https://author4-profile" target="_blank">Franck Dernoncourt</a><sup>4</sup>,
    <a href="https://author5-profile" target="_blank">Long Hoang Dang</a><sup>3</sup>,
    <a href="https://author6-profile" target="_blank">Viet Dac Lai</a><sup>4</sup>
</div>

<div>
    <sup>1</sup>Reasoning Foundation &emsp;
    <sup>2</sup>University of Maryland &emsp;
    <sup>3</sup>Posts and Telecommunications Institute of Technology &emsp;
    <sup>4</sup>Adobe Research
</div>
<div>
  
</div>

<img src="docs/resources/teaser.png" width="100%"/>
<p align="justify"><i>OWLViz is a challenging open-world benchmark designed to evaluate Vision-Language Models and Agents in Visual Question Answering tasks that require multi-step reasoning, tool usage, and external knowledge retrieval. Unlike traditional VQA datasets, OWLViz questions are short, clear, and demand complex reasoning over degraded images and external information sources.</i></p>

</div>

## Introduction

This repository presents **OWLViz: An Open-World Benchmark for Visual Question Answering**. OWLViz is a **challenging benchmark dataset** designed to evaluate visual question answering capabilities in open-world scenarios. It requires the integration of multiple capabilities, including common-sense knowledge, visual understanding, web exploration, and specialized tool usage to answer short queries.

## OWLViz Dataset

*   **Size**: OWLViz comprises **248 carefully annotated questions and answers**.
*   **Question Design**:
    Each question is associated with one or more of the following skill categories:
    - **Visual Skills**: Recognition, segmentation, attribute identification, spatial relations, ...
    - **Reasoning Skills**: Measurement, arithmetic, logic, counting, comparison, ...
    - **Tool Use Skills**: API calls, OCR, GUI interaction, search, ...

    Answers are provided in standardized formats like yes/no, multiple choice, and short text.

*   **Image Sources**: Images were gathered from publicly available websites and selected for their visual difficulty. They simulate realistic challenges such as low brightness, blur, and low contrast.
*   **Annotation Process**: The dataset was designed and annotated by the authors through a three-phase process to ensure quality, solvability, and objectivity. This rigorous process ensures that only independently answerable questions, clearly grounded in the visual content, are included.

*   **Difficulty Levels**: Questions are categorized into three increasing levels of difficulty based on the number of unique skills required:
    *   **Level 1**: Typically involves no more than 2 unique skills and at most 1 external tool.
    *   **Level 2**: Generally between 3 and 5 unique skills, often including a combination of two tools.
    *   **Level 3**: Designed for an ideal general-purpose assistant, these questions may require arbitrarily long action sequences, unrestricted tool use, and general internet access.

## Challenges and Significance

OWLViz is specifically designed to challenge both VLMs and agentic systems, necessitating three distinct skill sets:

1.  **Visually Degraded Inputs**: The dataset includes images with low brightness, poor contrast, or blur, where visual enhancement tools may be required for accurate processing. An example is asking to count people in a low-contrast night scene.
2.  **Complex Reasoning Capabilities**: Tasks demand sophisticated reasoning involving counting, projection, and measurement operations. For instance, counting multi-colored umbrellas requires object recognition, attribute identification, and precise counting.
3.  **Web Exploration and External Data Retrieval**: Certain challenges require models to explore the internet and retrieve external data based on minimal visual cues. An example involves identifying a road name in Fairfax, Virginia, requiring OCR, knowledge search, and knowledge retrieval.

## Experiments and Results

Experiments assessed three methodological approaches on OWLViz: **Vanilla VLMs, Tool-Calling Agents, and GUI Agents**.

*   **Human Performance**: Humans achieved **69.2% accuracy** on these intuitive tasks.
*   **Vanilla VLM Performance**: including Gemini (best at 27.09% accuracy), struggled with multi-step reasoning and tool use. Most models scored below 20% EM and 30% LM.
*   **Tool-Calling Agents Performance**: Systems integrating tool usage, such as HF Agent and DynaSaur showed improved EM scores (18.32% and 16.23%, respectively), with DynaSaur achieving the highest LM score (26.67%). Explicit tool usage led to a 2% EM gain for DynaSaur.
*   **GUI Agents Performance**: GUI agents like UI-TARS and ShowUI performed poorly, with 0.00% EM and LM maxing at 12.80%, reflecting low interaction capability.
*   **Qualitative Example**: A qualitative example showed Gemini failed to identify a shop name, DynaSaur gave an incorrect result despite tool access, and ShowUI returned no answer.

<img src="docs/resources/results_chart.png" width="100%" />

## Limitations

The current evaluation method transforms questions into constrained response types (e.g., multiple-choice, yes/no, numerical, short text) to enable exact-match evaluation. While this ensures consistency, it may increase the likelihood of correct responses by narrowing the output space, potentially overestimating model performance compared to free-form answers.

## Accessing the Dataset

The OWLViz dataset is currently **kept private to minimize data contamination**. Additional information on how to access the data is available upon request.

## Citation

```bibtex
@article{nguyen2025owlviz,
  title={OWLViz: An Open-World Benchmark for Visual Question Answering},
  author={Nguyen, Thuy and Nguyen, Dang and Nguyen, Hoang and Luong, Thuan and Dang, Long Hoang and Lai, Viet Dac},
  journal={arXiv preprint arXiv:2503.07631},
  year={2025}
}
```