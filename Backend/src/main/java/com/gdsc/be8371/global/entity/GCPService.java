package com.gdsc.be8371.global.entity;

import com.google.cloud.storage.BlobId;
import com.google.cloud.storage.BlobInfo;
import com.google.cloud.storage.Storage;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
@Slf4j
public class GCPService {
    @Value("${SPRING_GCP_BUCKETNAME}")
    private String bucketName;

    @Autowired
    private Storage storage;

    public List<String> uploadFile(List<MultipartFile> multipartFile) throws IOException {
        List<String> urlList = new ArrayList<>();

        for(MultipartFile file: multipartFile) {
            String fileName = file.getOriginalFilename()+ UUID.randomUUID();
            BlobId blobId = BlobId.of(bucketName, fileName);
            BlobInfo blobInfo = BlobInfo.newBuilder(blobId).build();
            storage.create(blobInfo, file.getBytes());
            urlList.add("https://storage.googleapis.com/" + bucketName + "/" + fileName);
        }
        return urlList;
    }
    // 파일 유효성 검사 추후 필요하면 추가

}
