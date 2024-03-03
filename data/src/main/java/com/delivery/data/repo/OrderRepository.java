
package com.delivery.data.repo;

import com.delivery.data.Order;
import com.delivery.data.Courier;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findByCourier(Courier courier);
    List<Order> findByCourierId(Long courierId);
    List<Order> findByStatus(Long status);

    Order findByName(String name);
}
