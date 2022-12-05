package com.gdsc.be8371;

import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.core.io.WritableResource;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.awt.*;
import java.io.IOException;
import java.io.OutputStream;

@SpringBootTest
@Slf4j
public class gcpStorageTests {

    @Value("${gcs-resource-test-bucket}")
    private String bucketName;

//    @Test
//    public void saveImageTest() throws IOException{
//        Image image1 = null;
//        try {
//            os.write(data.getBytes());
//        }
//    }
}
