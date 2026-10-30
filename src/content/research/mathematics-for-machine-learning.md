---
title: Mathematics for Machine Learning
group: Memory & Learning
kind: foundation
status: in-progress
updated: 2026-05-03
summary: Going back to the math, slowly, on purpose.
---

# Why the Math of Machine Learning is Weirder Than You Think: 5 Impactful Insights

## 1. Introduction: Beyond the Black Box

In the modern technical landscape, artificial intelligence is often treated as a "black box"—a mysterious engine where data goes in and predictions emerge. However, the mathematics governing these systems is far from magical; it is a rigorous, elegant framework that often defies the intuition we developed in high school or undergraduate calculus.

At elite institutions like Carnegie Mellon University (CMU), the objective of foundational courses like 10-606 and 10-607 is not merely to teach students how to "do math," but to help them achieve "mathematical maturity." This involves learning to think in formal representations—building a bridge from an English-language description of a problem to a precise mathematical model. By distilling core takeaways from advanced materials like CMU’s foundations and Stanford’s CS229, we can uncover insights that change how we view the internal mechanics of AI.


---


## 2. Takeaway 1: Your Calculus Teacher Lied—Backpropagation is Not Just Derivatives

Most of us were taught that to find the rate of change in a function, you simply apply closed-form calculus rules. However, in machine learning, this approach fails spectacularly.

When dealing with a massive neural network (viewed as a very large function f), applying standard calculus rules causes the expression for the derivative to "explode." The resulting closed-form derivative would be significantly larger and more complex than the original function itself.

The true engine behind backpropagation is Reverse-Mode Automatic Differentiation. Instead of writing down one giant formula, we represent the function as an expression graph—a sequence of basic operations. We then work backward from the output, computing the derivative of each variable by utilizing the derivatives of its "children." This clever application of the chain rule ensures we can compute the gradient in the same time complexity as the forward pass used to calculate the function's value.

"The practical meaning of this is that, without being careful, it would be much more computationally expensive to compute the gradient than to compute f."

The Bridge: But once we can compute these gradients efficiently, we run into our next problem: where exactly are these gradients taking us?


---


## 3. Takeaway 2: The "Local Minima" Anxiety is (Often) Overblown

In introductory optimization, we are taught to fear local minima. We assume that if we don't reach the global optimum, our model has failed. In neural networks, the empirical risk—the function we are trying to minimize—is almost always non-convex, meaning local minima are an unavoidable "fact of life."

However, the necessity of finding the global optimum is a subject of debate. While non-convexity is real, in practice, neural networks tend to find "reasonable solutions" that perform well even if they aren't the absolute lowest point on the error surface. In fact, searching too aggressively for a global optimum can be counter-productive.

Finding the absolute global solution essentially means searching over a massive set of candidate functions. While this decreases the "bias" of the model, it simultaneously increases "variance." This high variance can lead to overfitting, where the model performs perfectly on training data but fails on new, unseen information. Often, a "good enough" local minimum provides better generalization.

The Bridge: If finding the "best" point on a landscape is fraught with peril, perhaps the problem isn't the landscape itself, but our obsession with finding a single point.


---


## 4. Takeaway 3: The Bayesian "Safety Net"—Why Optimization Isn't Everything

Most practitioners rely on Maximum A Posteriori (MAP) Estimation, which seeks a single "best" set of weights \hat{w} to minimize a loss function. The Bayesian approach, however, argues that we should integrate (average) over all possible weights, weighted by their posterior probability.

The danger of relying on a single "best" estimate is illustrated by the Airplane Landing example. Suppose you have three hypotheses:

1. The plane lands: 0.4 probability.
2. The plane crashes: 0.3 probability.
3. The plane explodes: 0.3 probability.

A MAP estimate would tell you the "best" outcome is that the plane lands (0.4 is the highest single probability). However, the combined probability of catastrophic failure is 0.6. If you want to survive, the MAP estimate is dangerously misleading. Similarly, in a Rigged Coin scenario, if you see three heads in a row (HHH), a MAP estimate concludes the coin is 100\% rigged. A Bayesian approach accounts for the possibility that a fair coin could also produce three heads, resulting in a more tempered posterior predictive of 0.94.

"All parameters are nuisance parameters."

Educator's Note: In Bayesianism, we don't care about the "true" weight as much as we care about the "average" prediction across all possible universes.

The Bridge: This philosophy of modeling how data is generated leads us to a fundamental question: do we model the world itself, or just the boundary between categories?


---


## 5. Takeaway 4: The Generative vs. Discriminative Tug-of-War

When choosing a linear classifier, we often weigh Gaussian Discriminant Analysis (GDA) against Logistic Regression. This represents the classic tug-of-war between generative and discriminative modeling.

* GDA (Generative): GDA models the joint distribution p(x, y) by learning p(x|y)p(y). It makes the strong assumption that each class generates observations from a Gaussian distribution. Because it assumes more structure, it is more efficient and requires less data—if those assumptions are correct.
* Logistic Regression (Discriminative): This models the posterior p(y|x) directly. It makes fewer assumptions and is more robust to data that doesn't follow a perfect bell curve, but it is more "data-hungry."

In practice, Logistic Regression is often preferred because it tends to be "well-calibrated." This means if the model predicts a 70\% chance of a label, empirical observation will show that roughly 70\% of those cases are indeed positive.

The Bridge: Whether we model the distribution or the boundary, we are ultimately trying to align our model with reality—a concept that leads us to the heart of Information Theory.


---


## 6. Takeaway 5: KL Divergence—Measuring the "Distance" Between Ideas

One of the most surprising bridges in machine learning is the link between statistics and Information Theory. We often train models using Maximum Likelihood Estimation (MLE) to make the observed data as probable as possible.

Mathematically, this is identical to minimizing the Kullback-Leibler (KL) Divergence between the empirical distribution of the training data P and the model’s distribution Q. KL Divergence measures the "information distance" or the penalty paid for using Q to represent P. The bridge between these two is Cross-Entropy H(P, Q); training a model to "maximize likelihood" is equivalent to minimizing the cross-entropy, which in turn minimizes the KL Divergence.

By minimizing this "distance," we are essentially trying to make the model's internal representation of the world indistinguishable from the actual data. This transforms training from a simple calculus problem into a quest to minimize information loss.


---


## 7. Conclusion: The Power of Mathematical Maturity

Understanding the math of machine learning requires a shift from "calculating" to "modeling." When we stop viewing these algorithms as black boxes and start seeing them as expression graphs, probability distributions, and information distances, we move from being users of AI to being architects of it.

Understanding these foundations—that backpropagation is a computational shortcut, that local minima are manageable, and that uncertainty can be integrated—changes how we build and debug systems.

## Final Question: If we can achieve state-of-the-art results with local minima and "nuisance" parameters, what other mathematical "rules" are we ready to break to reach the next frontier of AI?

