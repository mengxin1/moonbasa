/*
Navicat MySQL Data Transfer

Source Server         : user
Source Server Version : 50721
Source Host           : localhost:3306
Source Database       : moonbasa

Target Server Type    : MYSQL
Target Server Version : 50721
File Encoding         : 65001

Date: 2018-11-24 16:13:09
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `recom`
-- ----------------------------
DROP TABLE IF EXISTS `recom`;
CREATE TABLE `recom` (
  `sid` tinyint(2) NOT NULL,
  `url` varchar(200) NOT NULL,
  `title` varchar(200) NOT NULL,
  `price` float(4,0) unsigned NOT NULL,
  `delprice` float(6,2) unsigned zerofill DEFAULT NULL,
  `src` varchar(1000) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of recom
-- ----------------------------
INSERT INTO `recom` VALUES ('1', 'http://vp2.mbsimg.com/ProductImg/97/1803/large/970149924-CL01-01-L.jpg', '星弥2018秋季新款女装双排扣纯色梭织大...', '308', '499.00', 'http://vp1.mbsimg.com/ProductImg/97/1803/huge/970149924-CL01-01-H.jpg,http://vp1.mbsimg.com/ProductImg/97/1803/huge/970149924-CL01-04-H.jpg,http://vp1.mbsimg.com/ProductImg/97/1803/huge/970149924-CL01-03-H.jpg,http://vp1.mbsimg.com/ProductImg/97/1803/huge/970149924-CL01-02-H.jpg,http://vp1.mbsimg.com/ProductImg/97/1803/huge/970149924-CL01-05-H.jpg');
INSERT INTO `recom` VALUES ('2', 'http://vp3.mbsimg.com/ProductImg/97/1803/large/970149982-CL01-01-L.jpg', '星弥2018秋季新款女装翻领格子羊毛大衣...', '298', '499.00', 'http://vp1.mbsimg.com/ProductImg/97/1803/huge/970149982-CL01-01-H.jpg,http://vp1.mbsimg.com/ProductImg/97/1803/huge/970149982-CL01-02-H.jpg,http://vp1.mbsimg.com/ProductImg/97/1803/huge/970149982-CL01-03-H.jpg,http://vp1.mbsimg.com/ProductImg/97/1803/huge/970149982-CL01-04-H.jpg,http://vp1.mbsimg.com/ProductImg/97/1803/huge/970149982-CL01-05-H.jpg');
INSERT INTO `recom` VALUES ('3', 'http://vp1.mbsimg.com/ProductImg/97/1802/large/970148593-CL01-01-L.jpg', '茵曼新款圆领趣味印绣百搭落肩短袖T恤...', '119', '119.00', 'http://vp1.mbsimg.com/ProductImg/97/1802/huge/970148593-CL01-01-H.jpg,http://vp1.mbsimg.com/ProductImg/97/1802/huge/970148593-CL01-02-H.jpg,http://vp1.mbsimg.com/ProductImg/97/1802/huge/970148593-CL01-03-H.jpg');
INSERT INTO `recom` VALUES ('4', 'http://vp2.mbsimg.com/ProductImg/97/1802/large/970148595-CL01-01-L.jpg', '茵曼V领松紧腰皱褶黑色碎花裙子连衣裙F...', '229', '229.00', 'http://vp1.mbsimg.com/ProductImg/97/1802/huge/970148595-CL01-01-H.jpg,http://vp1.mbsimg.com/ProductImg/97/1802/huge/970148595-CL01-03-H.jpg,http://vp1.mbsimg.com/ProductImg/97/1802/huge/970148595-CL01-04-H.jpg,http://vp1.mbsimg.com/ProductImg/97/1802/huge/970148595-CL01-05-H.jpg');
INSERT INTO `recom` VALUES ('5', 'http://vp3.mbsimg.com/ProductImg/97/1802/large/970148589-CL01-01-L.jpg', '茵曼中腰毛边小A摆拼接显瘦半身牛仔裙1...', '179', '179.00', 'http://vp1.mbsimg.com/ProductImg/97/1802/huge/970148589-CL01-01-H.jpg,http://vp1.mbsimg.com/ProductImg/97/1802/huge/970148589-CL02-01-H.jpg,http://vp1.mbsimg.com/ProductImg/97/1802/huge/970148589-CL02-02-H.jpg,http://vp1.mbsimg.com/ProductImg/97/1802/huge/970148589-CL02-03-H.jpg,http://vp1.mbsimg.com/ProductImg/97/1802/huge/970148589-CL02-04-H.jpg');
INSERT INTO `recom` VALUES ('6', 'http://vp1.mbsimg.com/ProductImg/97/1803/large/970150058-CL01-01-L.jpg', '积积州岛韩版女装秋冬款宽松条纹棒针长...', '178', '346.00', 'http://vp1.mbsimg.com/ProductImg/97/1803/huge/970150058-CL01-01-H.jpg,http://vp1.mbsimg.com/ProductImg/97/1803/huge/970150058-CL01-02-H.jpg');
INSERT INTO `recom` VALUES ('7', 'http://vp2.mbsimg.com/ProductImg/97/1803/large/970150059-CL01-01-L.jpg', '积积州岛秋季韩版新款韩版开衫针织衫外...', '178', '346.00', 'http://vp1.mbsimg.com/ProductImg/97/1803/huge/970150059-CL01-01-H.jpg,http://vp1.mbsimg.com/ProductImg/97/1803/huge/970150059-CL01-02-H.jpg,http://vp1.mbsimg.com/ProductImg/97/1803/huge/970150059-CL01-03-H.jpg');
INSERT INTO `recom` VALUES ('8', 'http://vp3.mbsimg.com/ProductImg/97/1803/large/970150143-CL01-01-L.jpg', '积积州岛秋季宽松长裤松紧纯色口袋高腰...', '168', '326.00', 'http://vp1.mbsimg.com/ProductImg/97/1803/huge/970150143-CL01-01-H.jpg,http://vp1.mbsimg.com/ProductImg/97/1803/huge/970150143-CL01-02-H.jpg,http://vp1.mbsimg.com/ProductImg/97/1803/huge/970150143-CL01-03-H.jpg');
INSERT INTO `recom` VALUES ('9', 'http://vp1.mbsimg.com/ProductImg/97/1803/large/970148879-CL01-01-L.jpg', '嘉瓦娜2018新款蕾丝拼接雪纺裙', '378', '590.00', 'http://vp1.mbsimg.com/ProductImg/97/1803/huge/970148879-CL01-01-H.jpg,http://vp1.mbsimg.com/ProductImg/97/1803/huge/970148879-CL01-02-H.jpg,http://vp1.mbsimg.com/ProductImg/97/1803/huge/970148879-CL01-03-H.jpg');
INSERT INTO `recom` VALUES ('10', 'http://vp2.mbsimg.com/ProductImg/97/1803/large/970148885-CL01-01-L.jpg', '嘉瓦娜2018新款无袖连衣裙', '378', '590.00', 'http://vp1.mbsimg.com/ProductImg/97/1803/huge/970148885-CL01-01-H.jpg,http://vp1.mbsimg.com/ProductImg/97/1803/huge/970148885-CL01-02-H.jpg,http://vp1.mbsimg.com/ProductImg/97/1803/huge/970148885-CL01-03-H.jpg');
INSERT INTO `recom` VALUES ('11', 'http://vp3.mbsimg.com/ProductImg/97/1803/large/970148982-CL01-01-L.jpg', '名将MJ运动鞋女ulzzang韩版原宿百搭201...', '128', '318.00', 'http://vp1.mbsimg.com/ProductImg/97/1803/huge/970148982-CL01-01-H.jpg,http://vp1.mbsimg.com/ProductImg/97/1803/huge/970148982-CL01-02-H.jpg,http://vp1.mbsimg.com/ProductImg/97/1803/huge/970148982-CL01-04-H.jpg,http://vp1.mbsimg.com/ProductImg/97/1803/huge/970148982-CL01-05-H.jpg');
INSERT INTO `recom` VALUES ('12', 'http://vp3.mbsimg.com/ProductImg/97/1802/large/970147015-CL01-02-L.jpg', '瑞思皮尔Rspier2018夏季新款里外全皮凉...', '298', '599.00', 'http://vp1.mbsimg.com/ProductImg/97/1802/huge/970147015-CL01-02-H.jpg,http://vp1.mbsimg.com/ProductImg/97/1802/huge/970147015-CL01-03-H.jpg');
INSERT INTO `recom` VALUES ('13', 'http://vp1.mbsimg.com/ProductImg/97/1801/large/970144828-CL01-01-L.jpg', '瑞思皮尔Rspier2018春季新款韩版蝴蝶结...', '298', '599.00', 'http://vp1.mbsimg.com/ProductImg/97/1801/huge/970144828-CL01-01-H.jpg');
INSERT INTO `recom` VALUES ('14', 'http://images4.moonbasa.com/ProductImg/1/1803/large/461618302-093-01-L.jpg', '梦芭莎直身宽松型拼接蕾丝小立领长袖套...', '167', '239.00', 'http://images.moonbasa.com/ProductImg/1/1803/huge/461618302-093-01-H.jpg,http://images.moonbasa.com/ProductImg/1/1803/huge/461618302-093-02-H.jpg,http://images.moonbasa.com/ProductImg/1/1803/huge/461618302-093-03-H.jpg,http://images.moonbasa.com/ProductImg/1/1803/huge/461618302-093-04-H.jpg,http://images.moonbasa.com/ProductImg/1/1803/huge/461618302-093-05-H.jpg');
INSERT INTO `recom` VALUES ('15', 'http://images5.moonbasa.com/ProductImg/1/1803/large/465018303-009-01-L.jpg', '通勤百搭显瘦修身脚口隐形拉链窄脚九分...', '119', '169.00', 'http://images.moonbasa.com/ProductImg/1/1803/huge/465018303-009-01-H.jpg,http://images.moonbasa.com/ProductImg/1/1803/huge/465018303-009-02-H.jpg,http://images.moonbasa.com/ProductImg/1/1803/huge/465018303-009-03-H.jpg,http://images.moonbasa.com/ProductImg/1/1803/huge/465018303-009-04-H.jpg,http://images.moonbasa.com/ProductImg/1/1803/huge/465018303-009-05-H.jpg');
INSERT INTO `recom` VALUES ('16', 'http://images6.moonbasa.com/ProductImg/1/1803/large/467118310-009-01-L.jpg', '梦芭莎色织提花开襟式收腰A摆撞色针织...', '209', '299.00', 'http://images.moonbasa.com/ProductImg/1/1803/huge/467118310-009-01-H.jpg,http://images.moonbasa.com/ProductImg/1/1803/huge/467118310-009-02-H.jpg,http://images.moonbasa.com/ProductImg/1/1803/huge/467118310-009-04-H.jpg,http://images.moonbasa.com/ProductImg/1/1803/huge/467118310-009-05-H.jpg,http://images.moonbasa.com/ProductImg/1/1803/huge/467118310-009-06-H.jpg');
INSERT INTO `recom` VALUES ('17', 'http://images7.moonbasa.com/ProductImg/1/1803/large/465018310-009-01-L.jpg', '梦芭莎时尚亮钻装饰黑色牛仔阔腿八分裤', '188', '269.00', 'http://images.moonbasa.com/ProductImg/1/1803/huge/465018310-009-01-H.jpg,http://images.moonbasa.com/ProductImg/1/1803/huge/465018310-009-02-H.jpg,http://images.moonbasa.com/ProductImg/1/1803/huge/465018310-009-03-H.jpg,http://images.moonbasa.com/ProductImg/1/1803/huge/465018310-009-04-H.jpg,http://images.moonbasa.com/ProductImg/1/1803/huge/465018310-009-05-H.jpg');
INSERT INTO `recom` VALUES ('18', 'http://images.moonbasa.com/ProductImg/1/1803/large/463018335-010-01-L.jpg', '宽松型层次荷叶边七分袖V领套头小衫', '119', '169.00', 'http://images.moonbasa.com/ProductImg/1/1803/huge/463018335-010-01-H.jpg,http://images.moonbasa.com/ProductImg/1/1803/huge/463018335-010-02-H.jpg,http://images.moonbasa.com/ProductImg/1/1803/huge/463018335-010-03-H.jpg,http://images.moonbasa.com/ProductImg/1/1803/huge/463018335-010-04-H.jpg,http://images.moonbasa.com/ProductImg/1/1803/huge/463018335-010-05-H.jpg');
INSERT INTO `recom` VALUES ('19', 'http://images1.moonbasa.com/ProductImg/1/1803/large/467218302-321-01-L.jpg', '梦芭莎优雅品质感含羊毛花纱面料流苏  ...', '139', '199.00', 'http://images.moonbasa.com/ProductImg/1/1803/huge/467218302-321-01-H.jpg,http://images.moonbasa.com/ProductImg/1/1803/huge/467218302-321-02-H.jpg,http://images.moonbasa.com/ProductImg/1/1803/huge/467218302-321-03-H.jpg,http://images.moonbasa.com/ProductImg/1/1803/huge/467218302-321-04-H.jpg,http://images.moonbasa.com/ProductImg/1/1803/huge/467218302-321-05-H.jpg');
INSERT INTO `recom` VALUES ('20', 'http://images2.moonbasa.com/ProductImg/1/1803/large/463018336-093-01-L.jpg', '梦芭莎精致提花料宽松型绑带装饰套头小...', '167', '239.00', 'http://images.moonbasa.com/ProductImg/1/1803/huge/463018336-093-01-H.jpg,http://images.moonbasa.com/ProductImg/1/1803/huge/463018336-093-02-H.jpg,http://images.moonbasa.com/ProductImg/1/1803/huge/463018336-093-03-H.jpg,http://images.moonbasa.com/ProductImg/1/1803/huge/463018336-093-04-H.jpg,http://images.moonbasa.com/ProductImg/1/1803/huge/463018336-093-05-H.jpg');

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `sid` int(3) unsigned NOT NULL AUTO_INCREMENT,
  `tel` varchar(11) NOT NULL,
  `password` varchar(255) NOT NULL,
  `time` datetime NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=MyISAM AUTO_INCREMENT=42 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('25', '15770763509', '1111111', '2018-11-22 10:15:04');
INSERT INTO `user` VALUES ('26', '15770763509', '$2y$10$eAVZw9KnEVNl7vT/lme5OOstqmTduj/PUouX.4/m1hN7SnCaROT3y', '2018-11-22 10:17:34');
INSERT INTO `user` VALUES ('27', '15770763509', '$2y$10$BsjvAJsVhG8pc2h.eFJf2.kYJpmgMP0ttJZXqeVve724bPUsa1yAG', '2018-11-22 10:17:35');
INSERT INTO `user` VALUES ('28', '15770763509', '$2y$10$NClYk.mAGfUugz5twF17oOaHH5tEzZVS0ObujqzimbCb6tDOEBB5G', '2018-11-22 10:17:37');
INSERT INTO `user` VALUES ('29', '15770763509', '$2y$10$awhkZfo707gcyzFeKJfKX.K1zuAybzRccy8RcOw5KcLoaRewf2iFC', '2018-11-22 10:17:46');
INSERT INTO `user` VALUES ('30', '15770763509', '$2y$10$h5nnOyfe369LQRnxF7jBb.Dzj7PVsBTnI33E.JOyzH6ocH2GWTOi6', '2018-11-22 10:17:47');
INSERT INTO `user` VALUES ('31', '15770763509', '$2y$10$Z5tNW0LkfIuSaxzsZvkHReNkRMvOBZUg5Rfqw6Q/KF2trwW8.STo2', '2018-11-22 10:17:52');
INSERT INTO `user` VALUES ('32', '11111111111', '$2y$10$wcM0DSQKiEsGSLiVlDIMu.j7jbG2VjgqQcGNH4bl1TSFYQ4aUYTmm', '2018-11-22 10:18:30');
INSERT INTO `user` VALUES ('33', '11111111111', '123456', '2018-11-22 10:19:46');
INSERT INTO `user` VALUES ('34', '11111111112', '123456', '2018-11-22 10:20:12');
INSERT INTO `user` VALUES ('35', '11111111113', '123456', '2018-11-22 10:24:19');
INSERT INTO `user` VALUES ('36', '15770763501', '$2y$10$xqGR2tZ629gyJ.wUO5mw8eXv/EGjj1v4JGTnjXdZ5rFJ5z9hhSGi.', '2018-11-22 10:26:02');
INSERT INTO `user` VALUES ('37', '11111111134', '$2y$10$EfOPSLDqZNJP8AC9YVI.6.7BDdNlw6U/KMd59xdOK5aE9FKO6Rkd6', '2018-11-22 10:29:33');
INSERT INTO `user` VALUES ('38', '22222222222', '$2y$10$Mhos1WKla675r5JXGdSiXec.Eh8ZjddAi4Vg1Y6kBgu/r4yMlv7Y.', '2018-11-22 10:34:15');
INSERT INTO `user` VALUES ('39', '99999999999', '$2y$10$B8OfaBDVp5kZ7V.DWVXKq.LSYGcSgbWuX9TiKHNUeEekGEg/CSFJ.', '2018-11-22 17:09:21');
INSERT INTO `user` VALUES ('40', '99999999998', '$2y$10$cybgmfNoxIn.hw.eFCkLKuvZggKOeQDWk4y8wF4bY9LzJc2goErYK', '2018-11-22 17:11:04');
INSERT INTO `user` VALUES ('41', '15553090340', '$2y$10$NX1NsXSQL1iCTXfiwuQ1ouD5MTG/5fFQpy5choGtNrwCMO8ArRJa2', '2018-11-23 09:24:51');
