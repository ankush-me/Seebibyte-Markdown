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