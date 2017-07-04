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

* # CHUNG16B

  The goal of this work is to recognise and localise short temporal signals in image time series, where strong supervision is not available for training. To this end we propose an image encoding that concisely represents human motion in a video sequence in a form that is suitable for learning with a ConvNet. The encoding reduces the pose information from an image to a single column, dramatically diminishing the input requirements for the network, but retaining the essential information for recognition. The encoding is applied to the task of recognizing and localising signed gestures in British Sign Language (BSL) videos. We demonstrate that using the proposed encoding, signs as short as 10 frames duration can be learnt from clips lasting hundreds of frames using only weak (clip level) supervision and with considerable label noise.

  [PDF](http://www.robots.ox.ac.uk/~vgg/publications/2016/Chung16b/chung16b.pdf)
  [All](http://www.robots.ox.ac.uk/~vgg/publications/2016/Chung16b)


* # FEICHTENHOFER16

  Recent applications of Convolutional Neural Networks (ConvNets) for human action recognition in videos have proposed different solutions for incorporating the appearance and motion information. We study a number of ways of fusing ConvNet towers both spatially and temporally in order to best take advantage of this spatio-temporal information. We make the following findings: (i) that rather than fusing at the softmax layer, a spatial and temporal network can be fused at a convolution layer without loss of performance, but with a substantial saving in parameters; (ii) that it is better to fuse such networks spatially at the last convolutional layer than earlier, and that additionally fusing at the class prediction layer can boost accuracy; finally (iii) that pooling of abstract convolutional features over spatiotemporal neighbourhoods further boosts performance. Based on these studies we propose a new ConvNet architecture for spatiotemporal fusion of video snippets, and evaluate its performance on standard benchmarks where this architecture achieves state-of-the-art results.

  [PDF](http://www.robots.ox.ac.uk/~vgg/publications/2016/Feichtenhofer16/feichtenhofer16.pdf)
  [ArXiv](https://arxiv.org/pdf/1604.06573v1)
  [Rendering Code](http://www.robots.ox.ac.uk/~vgg/software/two_stream_action/)
  [All](http://www.robots.ox.ac.uk/~vgg/publications/2016/Feichtenhofer16)

* # CROWLEY16

  The objective of this work is to recognize object categories in paintings, such as cars, cows and cathedrals. We achieve this by training classifiers from natural images of the objects. We make the following contributions: (i) we measure the extent of the domain shift problem for image-level classifiers trained on natural images vs paintings, for a variety of CNN architectures; (ii) we demonstrate that classification- by-detection (i.e. learning classifiers for regions rather than the entire image) recognizes (and locates) a wide range of small objects in paintings that are not picked up by image-level classifiers, and combining these two methods improves performance; and (iii) we develop a system that learns a region-level classifier on-the-fly for an object category of a user’s choosing, which is then applied to over 60 million object regions across 210,000 paintings to retrieve localised instances of that category.

  [PDF](http://www.robots.ox.ac.uk/~vgg/publications/2016/Crowley16/crowley16.pdf)
  [All](http://www.robots.ox.ac.uk/~vgg/publications/2016/Crowley16)

* # CHUNG16A

  The goal of this work is to determine the audio-video synchronisation between mouth motion and speech in a video. We propose a two-stream ConvNet architecture that enables a joint embedding between the sound and the mouth images to be trained end-to-end from unlabelled data. The trained network is used to determine the lip-sync error in a video. We apply the network to two further tasks: active speaker detection and lip reading. On both tasks we set a new state-of-the-art on standard benchmark datasets.

  [PDF](http://www.robots.ox.ac.uk/~vgg/publications/2016/Chung16a/chung16a.pdf.pdf)
  [Model](https://www.robots.ox.ac.uk/~vgg/software/lipsync/)
  [All](http://www.robots.ox.ac.uk/~vgg/publications/2016/Chung16a)

* # FOUHEY16

  In this paper we investigate 3D attributes as a means to understand the shape of an object in a single image. To this end, we make a number of contributions: (i) we introduce and define a set of 3D Shape attributes, including planarity, symmetry and occupied space; (ii) we show that such properties can be successfully inferred from a single image using a Convolutional Neural Network (CNN); (iii) we introduce a 143K image dataset of sculptures with 2197 works over 242 artists for training and evaluating the CNN; (iv) we show that the 3D attributes trained on this dataset generalize to images of other (non-sculpture) object classes; and furthermore (v) we show that the CNN also provides a shape embedding that can be used to match previously unseen sculptures largely independent of viewpoint.

  [PDF](http://www.robots.ox.ac.uk/~vgg/publications/2016/Fouhey16/fouhey16.pdf)
  [Dataset](http://www.robots.ox.ac.uk/~vgg/data/sculptures)
  [All](http://www.robots.ox.ac.uk/~vgg/publications/2016/Fouhey16)

* # JAMALUDIN16

  We describe a method to automatically predict radiological scores in spinal Magnetic Resonance Images (MRIs). Furthermore, we also identify and localize the pathologies that are the reasons for these scores. We term these pathological regions the "evidence hotspots". Our contributions are two fold: (i) a Convolutional Neural Network (CNN) architecture and training scheme to predict multiple radiological scores on multiple slice sagittal MRIs. The scheme uses multi-task CNN training with augmentation, and handles the class imbalance common in medical classification tasks. (ii) the prediction of a heat-map of evidence hotspots for each score. For both of these, all that is required for training is the class label of the disc or vertebrae, no stronger supervision (such as slice labels) is needed. We report state-of-the-art and near-human performances across multiple radiological scorings including: Pfirrmann grading, disc narrowing, endplate defects, and marrow changes.

  [PDF](http://www.robots.ox.ac.uk/~vgg/publications/2016/Jamaludin16/jamaludin16.pdf.pdf)
  [Poster](http://www.robots.ox.ac.uk/~vgg/publications/2016/Jamaludin16/poster.pdf)
  [All](http://www.robots.ox.ac.uk/~vgg/publications/2016/Jamaludin16)

* # GUPTA16

  In this paper we introduce a new method for text detection in natural images. The method comprises two contributions: First, a fast and scalable engine to generate synthetic images of text in clutter. This engine overlays synthetic text to existing background images in a natural way, accounting for the local 3D scene geometry. Second, we use the synthetic images to train a Fully-Convolutional Regression Network (FCRN) which efficiently performs text detection and bounding-box regression at all locations and multiple scales in an image. We discuss the relation of FCRN to the recently-introduced YOLO detector, as well as other end-to-end object detection systems based on deep learning. The resulting detection network significantly out performs current methods for text detection in natural images, achieving an F-measure of 84.2% on the standard ICDAR 2013 benchmark. Furthermore, it can process 15 images per second on a GPU.

  [PDF](http://www.robots.ox.ac.uk/~vgg/publications/2016/Gupta16/gupta16.pdf)
  [Dataset](http://www.robots.ox.ac.uk/~vgg/data/scenetext)
  [ArXiv](http://arxiv.org/abs/1604.06646)
  [Rendering Code](https://github.com/ankush-me/SynthText)
  [All](http://www.robots.ox.ac.uk/~vgg/publications/2016/Gupta16)

* # NOVOTNY16A

  The recent successes of deep learning have been possible due to the availability of increasingly large quantities of annotated data. A natural question, therefore, is whether further progress can be indefinitely sustained by annotating more data, or whether there is a saturation point beyond which a problem is essentially solved, or the capacity of a model is saturated. In this paper we examine this question from the viewpoint of learning shareable semantic parts, a fundamental building block to generalize visual knowledge between object categories. We ask two research questions often neglected: whether semantic parts are also visually shareable between classes, and how many annotations are required to learn them. In order to answer such questions, we collect 15,000 images of 100 animal classes and annotate them with parts. We then thoroughly test active learning and domain adaptation techniques to generalize to unseen classes parts that are learned from a limited number of classes and example images. Our experiments show that, for a majority of the classes, part annotations transfer well, and that performance reaches 98% of the accuracy of the fully annotated scenario by providing only a few thousand examples.

  [PDF](http://www.robots.ox.ac.uk/~vgg/publications/2016/Novotny16A/novotny16a.pdf)
  [Poster](http://www.robots.ox.ac.uk/~vgg/publications/2016/Novotny16A/poster.pdf)
  [All](http://www.robots.ox.ac.uk/~vgg/publications/2016/Novotny16A)

* # XIE15

  This paper concerns automated cell counting in microscopy images. The approach we take is to adapt Convolutional Neural Networks (CNNs) to regress a cell spatial density map across the image. This is applicable to situations where traditional single-cell segmentation based methods do not work well due to cell clumping or overlap. We make the following contributions: (i) we develop and compare architectures for two Fully Convolutional Regression Networks (FCRNs) for this task; (ii) since the networks are fully convolutional, they can predict a density map for an input image of arbitrary size, and we exploit this to improve efficiency at training time by training end-to-end on image patches; and (iii) we show that FCRNs trained entirely on synthetic data are able to give excellent predictions on real microscopy images without fine-tuning, and that the performance can be further improved by fine-tuning on the real images. We set a new state-of-the-art performance for cell counting on the standard synthetic image benchmarks and, as a side benefit, show the potential of the FCRNs for providing cell detections for overlapping cells.

  [PDF](http://www.robots.ox.ac.uk/~vgg/publications/2015/Xie15/weidi15.pdf)
  [All](http://www.robots.ox.ac.uk/~vgg/publications/2015/Xie15)

* # ZHONG16

  The goal of this work is to retrieve images containing both a target person and a target scene type from a large dataset of images. At run time this compound query is handled using a face classifier trained for the person, and an image classifier trained for the scene type. We make three contributions: first, we propose a hybrid convolutional neural network architecture that produces place-descriptors that are aware of faces and their corresponding descriptors. The network is trained to correctly classify a combination of face and scene classifier scores. Second, we propose an image synthesis system to render high quality fully-labelled face-and-place images, and train the network only from these synthetic images. Last, but not least, we collect and annotate a dataset of real images containing celebrities in different places, and use this dataset to evaluate the retrieval system. We demonstrate significantly improved retrieval performance for compound queries using the new face-aware place-descriptors.

  [PDF](http://www.robots.ox.ac.uk/~vgg/publications/2016/Zhong16/zhong16.pdf)
  [Poster](http://www.robots.ox.ac.uk/~vgg/publications/2016/Zhong16/poster.pdf)
  [Dataset](http://www.robots.ox.ac.uk/~vgg/data/celebrity_in_places/)
	[All](http://www.robots.ox.ac.uk/~vgg/publications/2016/Zhong16)
