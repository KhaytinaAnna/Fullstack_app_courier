
package com.delivery.data.repo;

import com.delivery.data.Order;
import com.delivery.data.Courier;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourierRepository extends JpaRepository<Courier, Long> {
    Courier findByName(String name);

    List<Courier> findByStatus(Long status);
}
