*	#	ARTETA16

	In this paper we explore the scenario of learning to count multiple instances of objects from images that have been dot-annotated through crowdsourcing. Specifically, we work with a large and challenging image dataset of penguins in the wild, for which tens of thousands of volunteer annotators have placed dots on instances of penguins in tens of thousands of images. The dataset, introduced and released with this paper, shows such a high-degree of object occlusion and scale variation that individual object detection or simple counting-density estimation is not able to estimate the bird counts reliably. To address the challenging counting task, we augment and interleave density estimation with foreground-background segmentation and explicit local uncertainty estimation. The three tasks are solved jointly by a new deep multi-task architecture. Using this multi-task learning, we show that the spread between the annotators can provide hints about local object scale and aid the foreground-background segmentation, which can then be used to set a better target density for learning density prediction. Considerable improvements in counting accuracy over a single-task density estimation approach are observed in our experiments.

	[PDF](http://www.robots.ox.ac.uk/~vgg/publications/2016/Arteta16/arteta16.pdf)
	[All](http://www.robots.ox.ac.uk/~vgg/publications/2016/Arteta16)

*	#	BILEN16

	Weakly supervised learning of object detection is an important problem in image understanding that still does not have a satisfactory solution. In this paper, we address this problem by exploiting the power of deep convolutional neural networks pre-trained on large-scale image-level classification tasks. We propose a weakly supervised deep detection architecture that modifies one such network to operate at the level of image regions, performing simultaneously region selection and classification. Trained as an image classifier, the architecture implicitly learns object detectors that are better than alternative weakly supervised detection systems on the PASCAL VOC data. The model, which is a simple and elegant end-to-end architecture, outperforms standard data augmentation and fine-tuning techniques for the task of image-level classification as well.

	[PDF](http://www.robots.ox.ac.uk/~vgg/publications/2016/Bilen16/bilen16.pdf)
	[Poster](http://www.robots.ox.ac.uk/~vgg/publications/2016/Bilen16/poster.pdf) [ArXiv](http://arxiv.org/abs/1511.02853)
	[Code and Models](https://github.com/hbilen/WSDDN)
	[All](http://www.robots.ox.ac.uk/~vgg/publications/2016/Bilen16)

* # CHUNG16

  Our aim is to recognise the words being spoken by a talking face, given only the video but not the audio. Existing works in this area have focussed on trying to recognise a small number of utterances in controlled environments (e.g. digits and alphabets), partially due to the shortage of suitable datasets. We make two novel contributions: first, we develop a pipeline for fully automated large-scale data collection from TV broadcasts. With this we have generated a dataset with over a million word instances, spoken by over a thousand different people; second, we develop CNN architectures that are able to effectively learn and recognize hundreds of words from this large-scale dataset. To our knowledge, we are the first to address the lip reading problem in a near real-world environment, in terms of lexicon size, generalisation across subjects, and variations across videos. We also demonstrate a recognition performance that exceeds the state of the art on a standard public benchmark dataset.

  [PDF](http://www.robots.ox.ac.uk/~vgg/publications/2016/Chung16/chung16.pdf)
  [Dataset](http://www.robots.ox.ac.uk/~vgg/data/lip_reading/)
  [All](http://www.robots.ox.ac.uk/~vgg/publications/2016/Chung16)

* # GUPTA16

  In this paper we introduce a new method for text detection in natural images. The method comprises two contributions: First, a fast and scalable engine to generate synthetic images of text in clutter. This engine overlays synthetic text to existing background images in a natural way, accounting for the local 3D scene geometry. Second, we use the synthetic images to train a Fully-Convolutional Regression Network (FCRN) which efficiently performs text detection and bounding-box regression at all locations and multiple scales in an image. We discuss the relation of FCRN to the recently-introduced YOLO detector, as well as other end-to-end object detection systems based on deep learning. The resulting detection network significantly out performs current methods for text detection in natural images, achieving an F-measure of 84.2% on the standard ICDAR 2013 benchmark. Furthermore, it can process 15 images per second on a GPU.

  [PDF](http://www.robots.ox.ac.uk/~vgg/publications/2016/Gupta16/gupta16.pdf)
  [Dataset](http://www.robots.ox.ac.uk/~vgg/data/scenetext)
  [ArXiv](http://arxiv.org/abs/1604.06646)
  [Rendering Code](https://github.com/ankush-me/SynthText)
  [All](http://www.robots.ox.ac.uk/~vgg/publications/2016/Gupta16)
