# 1-PDF解析
## 1.PDF读取解析
使用readPDF工具读取PDF，按页按行解析即可，获取数据逐个匹配塞进去

## 2.解析策略
```java
/*
         ** chenle 新加S801研控部门的PDF解析
         */
        PdfReader reader = null;
        try {
            reader = new PdfReader(fileName);
            CheckReport checkReport = new CheckReport();
            String faceType = "";
            /*
             ** chenle 新加S801研控部门的PDF解析
             */
            String isPass = "";
            String testType="";
            if(StringUtils.equals(site,"S801")){ //S801工厂的PDF解析策略
                if(pageNum==0){
                    pageNum = reader.getNumberOfPages();
                }
                for(int i = 1;i <= pageNum;i++){
                    pageContent += PdfTextExtractor.getTextFromPage(reader, i);
                }

                checkReport.setModelName(modelName);
                String[] contentSplit = pageContent.split("\n");

                //S801的机种名称与其他的不一样，
                // 单独一个循环判断机种是否重复上传
                for(int i = 0;i < contentSplit.length;i++) {
                    String[] split;
                    String tempStr = contentSplit[i];
                    if (tempStr == null) {
                        break;
                    }
                    split = tempStr.split(" ");
                    if(i == 3){
                        StringBuffer sql_s801 = new StringBuffer();
                        sql_s801.append("select * from MESEXT_FIRST_CHECK_REPORT where model_name = '"+split[3]+"'");
                        List<Map<String, Object>> sqlResult_s801 = baseFunctionService.getSqlResult(sql_s801.toString());
                        if(CollectionUtil.isNotEmpty(sqlResult_s801)){
                            return OperationResult.buildFailureResult("已解析过的pdf不能再次解析");
                        }
                        break;
                    }
                }
                //S801的机种名称与其他的不一样，
                // 单独一个循环判断机种是否重复上传

                for(int i = 0;i < contentSplit.length;i++){
                    String [] split;
                    String tempStr = contentSplit[i];
//                    System.out.printf("第"+i+"行数据为："+tempStr);
                    if(tempStr == null){
                        break;
                    }
                    split = tempStr.split(" ");
                    switch (i){
                        case 1:
                            if(!split[1].equals("PASS")){
                                isPass = "NG";
                                throw new RuntimeException("failure的文件不能上传");
                            }else{
                                isPass = split[1];
                                checkReport.setResult(split[1]);
                                checkReport.setBOMVersion(split[3]);
                                checkReport.setPassCount(split[5]);
                                checkReport.setPassRate(split[7]);
                                break;
                            }
                        case 2:
                            checkReport.setCheckPerson(split[1]);
                            checkReport.setCheckTime(split[3]+" "+split[4]);
//                            checkReport.setTestTime(split[4]);
                            checkReport.setNoPassCount(split[6]);
                            break;
                        case 3:
//                            checkReport.setTestType(split[3]);
                            testType = "首件";
                            checkReport.setTestType(testType);
                            checkReport.setModelName(split[3]);
                            checkReport.setNoCheckCount(split[5]);
                            checkReport.setCheckCount(split[7]);
                            break;
                        case 4:
                            checkReport.setLineBody(split[1]);
                            checkReport.setOrderCode(split[3]);
                            checkReport.setProductCode(split[5]);
                            break;
                        case 5:
                            faceType = split[1];
                            if(StringUtils.equals(faceType,"T")){
                                checkReport.setABSurface("A");
                                break;
                            }
                            if(StringUtils.equals(faceType,"B")){
                                checkReport.setABSurface("B");
                                break;
                            }
                            else{
                                checkReport.setABSurface(faceType);
                            }
                            break;
                        default:
                            break;
                    }
                }
                checkReport.setSite(site);
                checkReport.setFileId(fileId);

            }
            //其他工厂的PDF解析策略
            else{
                if(pageNum == 0) {
                    pageNum = reader.getNumberOfPages();
                }

                for(int i=1;i<=pageNum;i++){
                    pageContent += PdfTextExtractor.getTextFromPage(reader, i);//读取第i页的文档内容
                    //System.out.println(pageContent);
                }

                String shopOrder = modelName.split("-")[1];
                String productCode = modelName.split("-")[0];
                checkReport.setProductCode(productCode);
                String[] contentSplit = pageContent.split("\n");
//            添加面别
                //是否PASS或NG

                for(int i = 0;i<contentSplit.length;i++){
                    String[] split;
                    String tempStr = contentSplit[i];
                    System.out.println(i+"行数据为："+contentSplit[i]);
                    if(tempStr == null){
                        break;
                    }
                    if(i==2){
                        split = tempStr.split(" ");
                        checkReport.setResult(split[1]);
                        if(!"PASS".equals(split[1])&&StringUtils.equals(site,"5001")){
                            throw new RuntimeException("failure的文件不能上传");

                        }
                        if(!"PASS".equals(split[1])&&!StringUtils.equals(site,"5001")){
                            isPass = "NG";
                        }
                        testType=split[3];
                        checkReport.setTestType(split[3]);
                    }
                    if(i==3){
                        split = tempStr.split(" ");
                        checkReport.setCompany(split[1]);
                        checkReport.setWorkClass(split[2]);
                        checkReport.setCheckCount(split[3]);
                    }
                    if(i==5){
                        split = tempStr.split(" ");
                        int length = split.length;
                        checkReport.setModelName(modelName);
                        checkReport.setABSurface(split[length-3]);
                        faceType = split[length-3];
                        checkReport.setPassCount(split[length-1]);
                    }
                    if(i==6){
                        split = tempStr.split(" ");
                        checkReport.setScanTime(split[1]);
                        checkReport.setNoPassCount(split[split.length-1]);
                    }
                    if(i==7){
                        split = tempStr.split(" ");
                        checkReport.setProcessTime(split[1]);
                        checkReport.setOrderCode(shopOrder);
                        checkReport.setNoCheckCount(split[split.length-1]);
                    }
                    if(i==9){
                        split = tempStr.split(" ");
                        //文档解析发生了变化  第9行变得不怎么符合规则 分割后数量发生了改变 导致数组下标溢出
                        // 修复时为了向下兼容  故移除中文字符
                        //List<String> list = Arrays.asList(split);
                        ArrayList<String> list = new ArrayList<>(Arrays.asList(split));
                        list.remove("测值时间:");
                        list.remove("生产线别:");
                        list.remove("通过率:");

                        checkReport.setCheckTime(list.get(0));
                        checkReport.setLineBody(list.get(1));
                        checkReport.setPassRate(list.get(2));
                    }
                    if(i==10){

                        split = tempStr.split(" ");
                        if (split.length==2){
                            //取11行数据
                            split =contentSplit[11].split(" ");
                        }
                        checkReport.setTestTime(split[1]);
                        checkReport.setProduceTime(split[3]+" "+split[4]);
                        if(split.length > 5) {
                            checkReport.setCheckPerson(split[6]);
                        }
                    }
                }
                checkReport.setSite(site);
                checkReport.setFileId(fileId);
                if(StringUtils.equals(faceType,"TOP")){
                    faceType = "A";
                }
                if(StringUtils.equals(faceType,"BOT")){
                    faceType = "B";
                }
                if(StringUtils.equals(faceType,"ALL")){
                    faceType = "A";
                }
                if (StringUtils.equals(faceType,"A")){
                    faceType = "A";
                }
                if (StringUtils.equals(faceType,"B")){
                    faceType = "B";
                }

            }
            Map<String, Object> productPlan = getProductPlan(site, checkReport.getLineBody(), checkReport.getOrderCode(), faceType);

            String planLogUuid = null;
            if (Objects.nonNull(productPlan)){
                planLogUuid = (String) productPlan.get("UUID");
            }

            //NG情况下进行停机
            if("NG".equals(isPass)) {
                //this.stopMounter(site, checkReport.getLineBody(), checkReport.getOrderCode(), faceType);
            }

            if(StringUtils.isNotBlank(planLogUuid)&&!StringUtils.equals(testType,"IPQC")){
                checkReport.setPlanLogId(planLogUuid);
                //双套料生产的工单 允许上传多个首件报告 单套料则清空关联
                if (Integer.parseInt((String)productPlan.get("TL")) == 1){
                    clearOldRelation(planLogUuid);
                }else{
                    // 2024-05-27 双套料工单上传多个首件报告，不删除只解除关联关系
                    String updateSql = "update mesext_first_check_report set plan_log_id = '' where id = :ID ";
                    Map<String, Object> params = new HashMap<>();
                    List<CheckReport> all = checkReportDao.findAllBySiteAndPlanLogIdOrderByCreatedDate(site, planLogUuid);
                    if (all.size()>1){
                        String id = all.get(0).getId();
                        if (Objects.nonNull(id)){
                            params.put("ID", id);
                            int update = baseFunctionService.getUpdate(updateSql, params);
//                            checkReportDao.deleteById(id);
                        }
                    }
                }

            }
            if(StringUtils.isBlank(planLogUuid)&&StringUtils.equals(site,"5001")&&!StringUtils.equals(testType,"IPQC")){
                throw new RuntimeException("未找到PDF中下达/激活状态的工单");
            }
            //获取当前线体下达的工单获取其产品编码 与 现有的产品编码对比是否一致
            List<Map<String, Object>> results = baseFunctionService.getSqlResultThrowE(
                    "select a.shop_order,split(b.planned_item_bo,2) item from mesext_production_plan a " +
                            "left join shop_order b on a.site = b.site and a.shop_order = b.shop_order" +
                            " where a.site = '" + site + "' and a.line_no = '" + checkReport.getLineBody() + "' and a.status = '10'");
            if (CollectionUtil.isEmpty(results)){
//                throw new RuntimeException("当前线体"+checkReport.getLineBody()+"不存在下达工单");
            }
            System.out.printf(String.valueOf(results));

            Map<String, Object> map = results.get(0);
            Object itemBo = map.get("ITEM");
            if (!StringUtils.equals(String.valueOf(itemBo ),checkReport.getProductCode())){
                throw new RuntimeException("当前线体"+checkReport.getLineBody()+"下达工单的产品编码为："+itemBo+",与当前上传文件产品编码"+checkReport.getProductCode()+"不符");
            }

            checkReportDao.save(checkReport);

            System.out.printf("解析完成");
        } catch (Exception e) {
            throw new RuntimeException("解析失败，请检查pdf格式是否正确" + e.getMessage(), e);
        }finally {
            if(reader != null) {
                reader.close();
            }
        }
```
## 3.总结
本次主要进行的是PDF流解析的重写，新增一个工厂的解析方法，难度不大，重点还是熟悉业务流程和数据库，系统的操作。

### 3.1数据库连接

- 从yaml文件中找到oracle的信息，连接的时候记得修改为端口后面的字段
    
- 切记只用env和dev，不可使用pro
    
- oracl不同于mysql，是以表空间为单位，本次操作的是在meswip中才找到了数据表，mesext_first_check_report存放的是首次报告检测的内容
    

### 3.2Git工具使用

- 首先在本地克隆远程master分支
    
- new一个本地修改代码的分支：chenle_xxxx
    
- 本地修改代码
    
- 上测试机
    
    - 改代码的分支chenle_xxxx进行commit
        
    - checkout到dev分支，merge分支chenle_xxxx到dev中
        
    - pull一次远程，然后push
        
- 上主机也是同理，将本地分支merge到master中，切记不要将dev合并到master中


————————————————————————————————————————

如果将dev合并到master将会导致别人的错误bug可能发布到正式机上，引起宕机

————————————————————————————————————————

### 3.3 8月23日~25日BUG排查日志

**出现PDF Header not found的错误**
- PDF文件出错，受损等等
- 排查read PDF类和PDFBOX类的影响
- 最终问题出在服务器的问题，上传PDF的服务器和测试的服务器不是同一个，但是数据库一样，会导致无法从服务器下载PDF下来并且进行解析

**代码提交后依然无效，出现数组越界问题**
- 发布正式机没发布对
- TODOLIST：学习docker指令