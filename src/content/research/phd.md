---
title: PhD
group: Field & Practice
kind: in progress
status: in-progress
updated: 2026-05-03
summary: The long thing I'm working on — and how I'm trying to keep it from breaking me.
code: https://github.com/aifriend/geometric-signatures-proposal
---

# Formalizing Neural Population Dynamics: A Five-Class Functional Motif Taxonomy

## 1. The Theoretical Shift: From Descriptive Catalogues to Predictive Geometry

The central challenge in systems neuroscience is no longer the acquisition of high-dimensional neural data, but the absence of a rigorous, unifying framework that maps circuit architecture to computational capacity. To date, the field has been fragmented into descriptive silos: Carandini and Heeger’s divisive normalization accounts for gain control; Bastos and Friston’s predictive coding describes hierarchical inference; Papadimitriou’s assembly calculus formalizes operations on discrete neural populations; and recent advances in neural manifolds (Gosztolai et al., 2025) provide the tools to visualize latent trajectories. However, these programs currently exist as independent catalogues of activity rather than a cohesive "computational grammar."

The "Problem of Descriptive Catalogues" lies in our inability to predict how a circuit will generalize across tasks based on its population signatures. We hypothesize that these disparate frameworks are manifestations of a finite set of reusable functional motifs. These motifs represent the bridge between biological hardware and cognitive software, producing consistent geometric signatures within the neural manifold. Identifying these universal building blocks is the strategic frontier for both understanding biological intelligence and engineering general-purpose artificial intelligence; multi-task generalization depends fundamentally on the reuse of these motifs to produce consistent, task-invariant latent structures.

## 2. The Five-Class Functional Motif Taxonomy

Establishing a standardized taxonomy is not merely an exercise in classification; it is a strategic necessity for transforming neuroscience into a predictive science. This taxonomy serves as a falsifiable heuristic—a set of equivalence classes in the space of dynamical systems that organizes neural computation into testable functional classes.

The following framework defines the five motif classes that constitute the fundamental organizing hypothesis of circuit-level computation:

| Motif Class | Core Operations | Grounding Frameworks | Predicted Ablation Deficit |
| --- | --- | --- | --- |
| Encoding | Expansion recoding, sparse coding, pattern separation | Marr-Albus; Cayco-Gajic & Silver (2019) | Loss of pattern separation; catastrophic interference between overlapping tasks. |
| Transformation | Divisive normalization, soft-WTA, adaptive gain modulation | Carandini & Heeger (2012); Bhatt et al. (2025) | Loss of context sensitivity; inability to rescale activity across varied input ranges. |
| Association | Hebbian linking, chunking, pattern completion | Valiant (2018); Papadimitriou et al. (2020) | Loss of compositional generalization; inability to form or manipulate novel combinations. |
| Prediction | Hierarchical error signaling, trajectory planning | Bastos et al. (2012); Friston (2009); Gosztolai et al. (2025) | Loss of anticipatory behavior; significantly increased "surprise" signals to predictable stimuli. |
| Control | Attentional selection, WM gating, action selection | Mante et al. (2013); Badre (2021) | Perseverative behavior; inability to switch tasks or gate irrelevant distractors. |

The "So What?" of this taxonomy lies in its transition from functional labels to measurable manifestations. We contend that these motifs are not researcher-imposed categories but are identifiable through the high-dimensional geometry of the neural population. By quantifying these signatures, we move from observing what a circuit does to defining the equivalence classes of what it can do.

## 3. Geometric Signatures of Computation: Manifold Statistics and Latent Dynamics

Neural manifolds provide the primary tool for quantifying the "hardware capacity" of a circuit. To predict performance and multi-task robustness, we rely on four critical population geometry statistics (Sorscher et al., 2026) that act as the mathematical signatures of these motifs:

1. **Dimensionality:** Defines the complexity and total capacity of the representation.
2. **Factorization:** Measures the degree of shared latent structure and feature disentanglement. High factorization allows the circuit to manipulate independent variables (e.g., color and shape) without mutual interference.
3. **Signal-to-Noise Ratio (SNR):** Quantifies representational robustness, determining how reliably a motif can be read out by downstream "observer" circuits amidst trial-to-trial variability.
4. **Inter-task Correlation:** Analyzes representational similarity across task-specific subspaces. This metric is the primary predictor of whether a circuit will exhibit catastrophic interference or beneficial transfer learning.

To extract these signatures from raw neural activity, we integrate the MARBLE framework (Gosztolai et al., 2025), which decomposes manifolds into local flow fields and reconstructs latent dynamics. MARBLE allows us to identify "interpretable dynamical primitives"—the geometric fingerprints of computation. For example, a Transformation motif such as normalization is no longer just a mathematical term; it is identified as a geometric signature of adaptive rescaling of the manifold's extent across input conditions. These statistics are validated through a rigorous pipeline comparing biologically constrained models to empirical population data.

## 4. Methodological Framework: Discovering and Validating Motifs

Our discovery pipeline follows a multi-stage approach, utilizing artificial recurrent neural networks (RNNs) as a controlled testbed to isolate motif signatures before biological validation.

### The Discovery Phase: Task-Trained RNNs

We utilize RNNs trained on a rigorous multi-task cognitive battery encompassing perceptual discrimination, working memory (WM) maintenance, context-dependent integration (per Mante et al., 2013), and sequence learning. These networks are biologically constrained by architectural requirements derived from systems neuroscience:

* Divisive normalization layers for nonlinear gain control.
* Cell-type-specific inhibitory competition using PV, SST, and VIP interneuron models to implement soft-WTA (Winner-Take-All) dynamics.
* Hebbian/STDP-based synaptic consolidation to enable association and learning.

By systematically ablating these components, we measure the resulting "geometric fingerprints" and specific performance degradations, mapping circuit motifs to manifold statistics.

### The Validation Pipeline: Biological Data

The geometric signatures identified in RNNs are subsequently tested against the field's most robust biological datasets:

* Allen Brain Observatory: Focused on sensory Encoding and Transformation motifs using large-scale calcium imaging from the mouse visual cortex.
* International Brain Lab (IBL): Focused on decision-making motifs (Prediction and Control) through standardized multi-region recordings during evidence accumulation.
* Primate PFC Data: Analyzing cognitive motifs (Control and Association) involved in the context-dependent routing of information.

## 5. Convergent Evolution and the Universality of Motifs

The most rigorous validation of a "canonical" computational building block is its appearance across disparate evolutionary lineages. The Octopus Vertical Lobe (VL) represents the strongest evidence for this universality. Separated from the mammalian lineage by over 500 million years, the VL has independently evolved a "fan-out/fan-in" architecture for associative learning.

Computational modeling of the VL reveals an MSFL input layer projecting to an amacrine expansion layer (~25 million interneurons), mirroring the expansion recoding geometry of the mammalian cerebellum. We test the hypothesis that the octopus VL’s GABAergic inhibitory amacrine population implements a normalization-like computation functionally equivalent to mammalian circuits. Furthermore, the octopus's distributed arm-brain architecture—viewed through the Active Inference framework (Hale et al., 2025)—provides a unique test case for the boundary between local and centralized motifs. While Encoding and Transformation motifs may operate peripherally in arm ganglia, we hypothesize that Association and Control motifs require the central coordination of the VL. This cross-phylum conservation proves that these motifs are fundamental principles of intelligence rather than evolutionary contingencies.

## 6. Conclusion: The Predictive Future of Circuit Capacity

The mapping of circuit architecture to manifold geometry provides a strategic roadmap for the synthesis of biological neuroscience and artificial intelligence. By identifying the functional motifs that enable multi-tasking and generalization, we move from the descriptive task of cataloguing neurons to the predictive science of quantifying circuit capacity. This framework allows us to assess the "intellectual potential" of any system—biological or artificial—simply by analyzing its population geometry.

### Critical Takeaways

1. **Predictive Geometry:** The statistics of population manifolds—dimensionality, factorization, SNR, and task correlation—are the primary predictors of a circuit’s capacity to learn and generalize.
2. **Structural Universality:** Computational motifs like expansion recoding and divisive normalization are universal primitives conserved across half a billion years of evolution, from the mammalian cerebellum to the octopus vertical lobe.
3. **Functional Modularity:** A five-class taxonomy (Encoding, Transformation, Association, Prediction, Control) provides a modular bridge to engineering robust, multi-task AI by identifying the essential dynamical primitives required for general-purpose intelligence.

Ultimately, this framework transforms the study of neural activity from a descriptive catalogue of observations into a predictive science of computational capacity.
